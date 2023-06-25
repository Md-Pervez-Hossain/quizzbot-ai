export interface ISingleSavedQuestion {
  how_many_questions: string
  paste_text: string
  language: ILanguage
  difficulty: IDifficulty
  number_of_sets: INumberOfSets
  generatedText: string;
}

export type IDifficulty = 'Easy' | 'Average' | 'Above Average' | 'Difficult'
export type INumberOfSets = '1' | '2' | '3'
export type IHowManyQuestions =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
export type ILanguage =
  | 'Arabic'
  | 'Chinese'
  | 'Danish'
  | 'English'
  | 'French'
  | 'German'
  | 'Hebrew'
  | 'Hindi'
  | 'Indonesian'
  | 'Italian'
  | 'Japanese'
  | 'Polish'
  | 'Romanian'
  | 'Russian'
  | 'Spanish'
  | 'Swedish'
  | 'Turkish'
  | 'Vietnamese'
