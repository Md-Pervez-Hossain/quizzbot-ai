import { Schema, model } from 'mongoose'
import { ObjectId } from 'mongoose'

import { ISingleSavedQuestion } from './single_saved_questions.interface'
import {
  difficulty,
  howManyQuestions,
  languages,
  numberOfSets,
} from './single_saved_question.constant'

const SingleSavedQuestionSchema = new Schema<ISingleSavedQuestion>(
  {
    how_many_questions: {
      type: String,
      required: true,
      enum: howManyQuestions,
    },
    paste_text: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
      enum: languages,
    },
    difficulty: {
      type: String,
      required: true,
      enum: difficulty,
    },
    number_of_sets: {
      type: String,
      required: true,
      enum: numberOfSets,
    },
    generatedText: {
      type: String,
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
