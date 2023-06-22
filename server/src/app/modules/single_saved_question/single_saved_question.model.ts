import { Schema, model } from 'mongoose'
import { ISingleSavedQuestion } from './single_saved_questions.interface'

const SingleSavedQuestionSchema = new Schema<ISingleSavedQuestion>(
  {
    how_many_questions: {
      type: Number,
      required: true,
    },
    paste_text: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    number_of_sets: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const SingleSavedQuestion = model<ISingleSavedQuestion>(
  'SingleSavedQuestion',
  SingleSavedQuestionSchema
)

export default SingleSavedQuestion
