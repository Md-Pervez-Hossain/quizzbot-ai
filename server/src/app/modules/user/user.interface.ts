import { Model } from 'mongoose'

export type IUser = {
  email: string
  password: string
  avatar: string
  membership: string
  transaction: string
}

export type UserModel = Model<IUser, Record<string, unknown>>
