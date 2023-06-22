import express from 'express'
import { AllSavedQuestionsController } from './all_saved_questions.controller'

const router = express.Router()

router.get('/:userId', AllSavedQuestionsController.getAllSavedQuestions)
router.post('/:userId', AllSavedQuestionsController.addSavedQuestion)

export const AllSavedQuestionsRoute = router
