import express from 'express'
import { UserRoute } from '../modules/user/user.route'
import { AllSavedQuestionsRoute } from '../modules/all_saved_questions/all_saved_questions.route'
import { GenerateRoute } from '../modules/text_generation/text_generation.route'

const router = express.Router()

const routes = [
  {
    path: '/users',
    route: UserRoute,
  },
  {
    path: '/all-saved-questions',
    route: AllSavedQuestionsRoute,
  },
  {
    path: '/generate',
    route: GenerateRoute,
  },
]

routes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
