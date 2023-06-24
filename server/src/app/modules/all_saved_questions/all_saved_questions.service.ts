import { ISingleSavedQuestion } from '../single_saved_question/single_saved_questions.interface'
import AllSavedQuestions from './all_saved_questions.model'
import SingleSavedQuestion from '../single_saved_question/single_saved_question.model'

const addSavedQuestion = async (
  singleSavedQuestionData: ISingleSavedQuestion,
  userId: string
) => {
  const singleSavedQuestion = new SingleSavedQuestion(singleSavedQuestionData)
  await singleSavedQuestion.save()

  let allSavedQuestions = await AllSavedQuestions.findOne({ user: userId })
    .populate('savedQuestions')
    .exec()

  if (!allSavedQuestions) {
    allSavedQuestions = new AllSavedQuestions({
      user: userId,
      saved_questions: [singleSavedQuestion],
    })
  } else {
    allSavedQuestions.saved_questions.push(singleSavedQuestion)
  }

  await allSavedQuestions.save()

  allSavedQuestions = await AllSavedQuestions.findById(
    allSavedQuestions._id
  ).populate({
    path: 'saved_questions',
    model: 'SingleSavedQuestion',
    options: { sort: { createdAt: -1 } },
  })

  return allSavedQuestions
}

const getAllSavedQuestions = async (userId: string) => {
  let allSavedQuestions = await AllSavedQuestions.findOne({ user: userId })
    .populate({
      path: 'saved_questions',
      model: 'SingleSavedQuestion',
      options: { sort: { createdAt: -1 } },
    })
    .exec()

  if (!allSavedQuestions) {
    return {
      _id: null,
      user: userId,
      saved_questions: [],
      __v: 0,
    }
  }

  allSavedQuestions = await AllSavedQuestions.findById(allSavedQuestions._id)
    .populate({
      path: 'saved_questions',
      model: 'SingleSavedQuestion',
    })
    .exec()

  return allSavedQuestions
}

export const AllSavedQuestionsService = {
  addSavedQuestion,
  getAllSavedQuestions,
}
