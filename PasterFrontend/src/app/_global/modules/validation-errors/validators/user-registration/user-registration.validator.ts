import {
  AbstractControl,
  ValidationErrors,
  Validators
} from "@angular/forms";

export class UserRegistrationValidators implements Validators {

  // TODO kde tento error vypluje
  public static passwordMatch(c: AbstractControl): ValidationErrors | null {
    return (c.get('pass')?.value != c.get('pass2')?.value) ? { passwordControlNotMatch: true } : null;
  }

}
