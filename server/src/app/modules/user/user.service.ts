import bcrypt from 'bcrypt'
import { IUser } from './user.interface'
import { User } from './user.model'
import ApiError from '../../../errors/ApiError'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const { password } = user

  const salt = await bcrypt.genSalt()
  const passwordHash = await bcrypt.hash(password, salt)
  user.password = passwordHash

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new ApiError(400, 'Failed to create user')
  }

  return createdUser
}

export const UserService = { createUser }
