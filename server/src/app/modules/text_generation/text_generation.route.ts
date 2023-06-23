import express from 'express'
import { GenerateController } from './text_generation.controller'

const router = express.Router()

router.get('/', GenerateController.generateText)

export const GenerateRoute = router
