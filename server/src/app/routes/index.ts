import express from 'express'
import { UserRoute } from '../modules/user/user.route'

const router = express.Router()

const routes = [
  {
    path: '/users',
    route: UserRoute,
  },
]

routes.forEach(route => {
  router.use(route.path, route.route)
})

export default router
