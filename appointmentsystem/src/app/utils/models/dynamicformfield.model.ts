import { ValidatorFn } from "@angular/forms";

export interface FormField {
    name: string;
    label: string;
    type: string; // new property
    value: any;
    validators?: ValidatorFn[];
  }
  