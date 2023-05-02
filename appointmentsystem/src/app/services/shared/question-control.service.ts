import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from '../../components/shared/dynamic-field-component/dynamic-field-questionbase'

@Injectable({providedIn:"root"})
export class QuestionControlService {
  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.validations ? new FormControl(question.value || '',{validators:question.validations})
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
