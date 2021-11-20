import {
  AbstractControl,
  ValidationErrors,
  Validators
} from "@angular/forms";

export class UserRegistrationValidators implements Validators {

  public static passwordMatch(c: AbstractControl): ValidationErrors | null {
    const pass = c.get('pass');
    const pass2 = c.get('pass2');
    if ((pass?.touched || pass?.dirty) && (pass2?.touched || pass2?.dirty) && pass.valid) {
      return (pass?.value != pass2?.value) ? { passwordControlNotMatch: true } : null;
    }
    return null;
  }

}
