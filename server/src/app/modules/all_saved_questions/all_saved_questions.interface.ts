import { Types } from 'mongoose'
import { ISingleSavedQuestion } from '../single_saved_question/single_saved_questions.interface'
import { User } from '../user/user.model'

export interface IAllSavedQuestions extends Document {
  user: Types.ObjectId | typeof User
  saved_questions: Array<Types.ObjectId | ISingleSavedQuestion>
}
