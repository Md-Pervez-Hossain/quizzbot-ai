import express from 'express'
import { AllSavedQuestionsController } from './all_saved_questions.controller'
import validateRequest from '../../middlewares/validateRequest'
import { AllSavedQuestionsValidation } from './all_saved_questions.validation'

const router = express.Router()

router.get('/:userId', AllSavedQuestionsController.getAllSavedQuestions)
router.post(
  '/:userId',
  validateRequest(AllSavedQuestionsValidation.createSavedQuestionZodSchema),
  AllSavedQuestionsController.addSavedQuestion
)

router.patch(
  '/:questionId',
  AllSavedQuestionsController.updateSingleSavedQuestion
)

router.delete(
  '/:questionId',
  AllSavedQuestionsController.deleteSingleSavedQuestion
)

export const AllSavedQuestionsRoute = router
