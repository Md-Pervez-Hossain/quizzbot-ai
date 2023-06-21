import { Schema, model } from 'mongoose'
import { IUser, UserModel } from './user.interface'

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: true },
    membership: { type: String, required: true },
    transaction: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

export const User = model<IUser, UserModel>('User', userSchema)
