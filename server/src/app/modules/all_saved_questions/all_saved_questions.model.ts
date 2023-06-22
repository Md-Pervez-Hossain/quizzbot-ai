import { IAllSavedQuestions } from './all_saved_questions.interface'
import { Schema, model } from 'mongoose'

const AllSavedQuestionsSchema = new Schema<IAllSavedQuestions>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    saved_questions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'SingleSavedQuestion',
        required: true,
      },
    ],
  },
  { timestamps: true }
)

AllSavedQuestionsSchema.virtual('savedQuestions', {
  ref: 'SingleSavedQuestion',
  localField: 'saved_questions',
  foreignField: '_id',
  justOne: false,
})

AllSavedQuestionsSchema.set('toObject', { virtuals: true })
AllSavedQuestionsSchema.set('toJSON', { virtuals: true })

const AllSavedQuestions = model<IAllSavedQuestions>(
  'AllSavedQuestions',
  AllSavedQuestionsSchema
)

export default AllSavedQuestions
