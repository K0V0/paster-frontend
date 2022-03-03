import { JsonObject } from "@angular/compiler-cli/ngcc/src/packages/entry_point";
import { ServerError, ServerErrors } from "../interfaces/base.dto.interface";

export abstract class BaseComponent implements ServerError, ServerErrors {
  serverFieldsErrorMessages: JsonObject;
  serverFormErrorMessage: JsonObject;

  protected constructor() {
    this.serverFieldsErrorMessages = {};
    this.serverFormErrorMessage = {};
  }

  protected clearAllServerErrors() {
    this.clearFormServerError();
    this.clearfieldsServerErrors();
  }

  protected clearFormServerError() {
    this.serverFormErrorMessage = {};
  }

  protected clearfieldsServerErrors() {
    this.serverFieldsErrorMessages = {};
  }

  protected setFormServerError(error: any) {
    let e;
    if ((e = error.error.code) != null) {
      // treba zabalit do objektu lebo primitivny typ nespusti ngOnChange() akciu ak sa
      // jeho obsah nezmeni, co kvoli logike aplikacie tuna chcem
      this.serverFormErrorMessage = { form: e };
    }
  }

  protected setFieldsServerErrors(errors: any) {
    let e;
    if ((e = errors.error.messages) != null) {
      // todo vyparsocat vsetky error cody v array, rovno prelozit. ak nie tak vyplut default message zo serveru
      this.serverFieldsErrorMessages = e;
    }
  }

  protected setAllServerErrors(errors: any) {
    this.setFormServerError(errors);
    this.setFieldsServerErrors(errors);
  }

  get serverFieldsErrors(): JsonObject {
    return this.serverFieldsErrorMessages;
  }

  get serverFormError(): JsonObject {
    return this.serverFormErrorMessage;
  }

}
