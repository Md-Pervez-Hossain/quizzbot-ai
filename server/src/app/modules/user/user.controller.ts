import { NextFunction, Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { UserService } from './user.service'
import httpStatus from 'http-status'

const createUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, avatar, membership, transaction } = req.body.user
    const user = { email, password, avatar, membership, transaction }
    const result = await UserService.createUser(user)

    res.status(httpStatus.OK).json({
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created successfully',
      data: result,
    })
    next()
  }
)

export const UserController = { createUser }
