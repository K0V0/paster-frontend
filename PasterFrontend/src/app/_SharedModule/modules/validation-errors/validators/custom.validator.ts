import {
  FormControl,
  Validators
} from "@angular/forms";

export class CustomValidators implements Validators {

  public static forbiddenCharacters(c: FormControl) {
    let REGEX = /[^\w\.\s\-]+/;
    return REGEX.test(c.value) ? { forbiddenCharacters: { value: c.value } } : null;
  }

}
