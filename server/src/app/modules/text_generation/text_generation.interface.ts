import mongoose, { Document, Schema } from 'mongoose'

export interface ITextGeneration extends Document {
  prompt: string
  generatedText: string
}

const TextGenerationSchema: Schema = new Schema({
  prompt: { type: String, required: true },
  generatedText: { type: String, required: true },
})

export const TextGeneration = mongoose.model<ITextGeneration>(
  'TextGeneration',
  TextGenerationSchema
)
