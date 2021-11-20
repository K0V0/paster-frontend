import { ServerError, ServerErrors } from "../interfaces/server-errors-interface";
import { JsonObject } from "@angular/compiler-cli/ngcc/src/packages/entry_point";

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
    if ((e = error.error.message) != null) {
      // treba zabalit do objektu lebo primitivny typ nespusti ngOnChange() akciu ak sa
      // jeho obsah nezmeni, co kvoli logike aplikacie tuna chcem
      this.serverFormErrorMessage = { form: e };
    }
  }

  protected setFieldsServerErrors(errors: any) {
    let e;
    if ((e = errors.error.messages) != null) {
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
