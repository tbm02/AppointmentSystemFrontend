import { QuestionBase } from './dynamic-field-questionbase';

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}
