import { z } from 'zod'

const createSavedQuestionZodSchema = z.object({
  body: z.object({
    question: z.object({
      how_many_questions: z.string({
        required_error: 'How many question is required',
      }),
      paste_text: z.string({
        required_error: 'Text is required',
      }),
      language: z.string({
        required_error: 'Language is required',
      }),
      difficulty: z.string({
        required_error: 'Difficulty is required',
      }),
      number_of_sets: z.string({
        required_error: 'Number of sets is required',
      }),
    }),
  }),
})

export const AllSavedQuestionsValidation = { createSavedQuestionZodSchema }
