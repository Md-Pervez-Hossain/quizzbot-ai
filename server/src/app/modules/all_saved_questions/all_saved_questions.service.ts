import { ISingleSavedQuestion } from '../single_saved_question/single_saved_questions.interface'
import AllSavedQuestions from './all_saved_questions.model'
import SingleSavedQuestion from '../single_saved_question/single_saved_question.model'
import mongoose, { ObjectId } from 'mongoose'

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

const updateSingleSavedQuestion = async (
  userId: string,
  questionId: string,
  text: string
) => {
  const allSavedQuestion = await AllSavedQuestions.findOne({
    user: userId,
  }).populate('saved_questions')

  if (!allSavedQuestion) {
    throw new Error('Question not found')
  }

  const savedQuestion = allSavedQuestion.saved_questions.find((question: any) =>
    question._id.equals(new mongoose.Types.ObjectId(questionId))
  )

  if (!savedQuestion) {
    throw new Error('Question not found')
  }

  // console.log(savedQuestion)

  savedQuestion.generatedText = text
  await allSavedQuestion.save()

  return savedQuestion
}

const deleteSingleSavedQuestion = async (
  userId: string,
  questionId: string
) => {
  const allSavedQuestion = await AllSavedQuestions.findOne({
    user: userId,
  }).populate('saved_questions');

  if (!allSavedQuestion) {
    throw new Error('Question not found');
  }

  const savedQuestionIndex = allSavedQuestion.saved_questions.findIndex(
    (question: any) => question._id.equals(new mongoose.Types.ObjectId(questionId))
  );

  if (savedQuestionIndex === -1) {
    throw new Error('Question not found');
  }

  // Remove the saved question from the array
  allSavedQuestion.saved_questions.splice(savedQuestionIndex, 1);

  await allSavedQuestion.save();

  return 'Saved question deleted successfully';
};


export const AllSavedQuestionsService = {
  addSavedQuestion,
  getAllSavedQuestions,
  updateSingleSavedQuestion,
  deleteSingleSavedQuestion
}
