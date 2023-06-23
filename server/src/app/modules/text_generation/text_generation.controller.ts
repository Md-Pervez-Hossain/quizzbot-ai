import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { Configuration, OpenAIApi } from 'openai'
import config from '../../../config'
import sendResponse from '../../../shared/sendReponse'
import httpStatus from 'http-status'

export const generateText = catchAsync(
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const prompt = `Give me "5" questions in "Difficult" difficulty and "English" language in "True false" format from the below text wrapped with """ : 

    """artificial intelligence (AI), the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings. The term is frequently applied to the project of developing systems endowed with the intellectual processes characteristic of humans, such as the ability to reason, discover meaning, generalize, or learn from past experience. Since the development of the digital computer in the 1940s, it has been demonstrated that computers can be programmed to carry out very complex tasks—as, for example, discovering proofs for mathematical theorems or playing chess—with great proficiency. Still, despite continuing advances in computer processing speed and memory capacity, there are as yet no programs that can match human flexibility over wider domains or in tasks requiring much everyday knowledge. On the other hand, some programs have attained the performance levels of human experts and professionals in performing certain specific tasks, so that artificial intelligence in this limited sense is found in applications as diverse as medical diagnosis, computer search engines, and voice or handwriting recognition"""
    
    The response will be like this
    
    1. {Question will be here}, True/False
    2. {Question will be here}, True/False
    3. {Question will be here}, True/False
    ... So on
    
    `

    const configuration = new Configuration({
      apiKey: config.openai_api_key,
    })

    const openai = new OpenAIApi(configuration)

    const generatedTextResponse = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    })

    const generatedText = generatedTextResponse.data.choices?.[0].text || ''

    // Extract questions from the generated text
    const questionsRegex = /\d+\.\s*(.*?)\s*(?:\(([a-z])\)|True\/False)/gi
    const questions: string[] = []
    let match
    while ((match = questionsRegex.exec(generatedText))) {
      questions.push(match[1])
    }

    // Create a new text generation document
    // const textGeneration = new TextGeneration({
    //   prompt: req.body.prompt,
    //   generatedText,
    // });

    // Save the generated text
    // await textGeneration.save()

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: 'Generated text successfully',
      data: questions,
    })

    next()
  }
)

export const GenerateController = { generateText }
