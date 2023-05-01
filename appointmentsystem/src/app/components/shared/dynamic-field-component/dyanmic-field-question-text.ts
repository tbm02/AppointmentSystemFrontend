import { QuestionBase } from './dynamic-field-questionbase';

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}
