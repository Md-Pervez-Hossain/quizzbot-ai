import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { AllSavedQuestionsService } from './all_saved_questions.service'
import sendResponse from '../../../shared/sendReponse'
import httpStatus from 'http-status'

const addSavedQuestion = catchAsync(async (req: Request, res: Response) => {
  const {
    how_many_questions,
    paste_text,
    language,
    difficulty,
    number_of_sets,
    generatedText,
  } = req.body.question
  const userId = req.params.userId

  const singleSavedQuestionData = {
    how_many_questions,
    paste_text,
    language,
    difficulty,
    number_of_sets,
    generatedText,
  }

  const result = await AllSavedQuestionsService.addSavedQuestion(
    singleSavedQuestionData,
    userId
  )

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Question saved successfully',
    data: result,
  })
})

const getAllSavedQuestions = catchAsync(async (req: Request, res: Response) => {
  const userId = req.params.userId

  const result = await AllSavedQuestionsService.getAllSavedQuestions(userId)

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All questions retrieved successfully',
    data: result,
  })
})

const updateSingleSavedQuestion = catchAsync(
  async (req: Request, res: Response) => {
    const questionId = req.params.questionId
    const { userId, text } = req.body
    const result = await AllSavedQuestionsService.updateSingleSavedQuestion(
      userId,
      questionId,
      text
    )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Question updated successfully',
      data: result,
    })
  }
)

const deleteSingleSavedQuestion = catchAsync(
  async (req: Request, res: Response) => {
    const questionId = req.params.questionId
    const { userId } = req.body
    const result = await AllSavedQuestionsService.deleteSingleSavedQuestion(
      userId,
      questionId
    )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Question deleted successfully',
      data: result,
    })
  }
)

export const AllSavedQuestionsController = {
  getAllSavedQuestions,
  addSavedQuestion,
  updateSingleSavedQuestion,
  deleteSingleSavedQuestion,
}
