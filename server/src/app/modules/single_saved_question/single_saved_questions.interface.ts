export interface ISingleSavedQuestion {
  how_many_questions: string
  paste_text: string
  language: string
  difficulty: IDifficulty
  number_of_sets: INumberOfSets
}

export type IDifficulty = 'Easy' | 'Average' | 'Above Average' | 'Difficult'
export type INumberOfSets = '1' | '2' | '3'
export type IHowManyQuestions = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'