import { NgModule } from "@angular/core";
import { SendItemComponent } from "./send-item/send-item.component";
import { TranslateModule } from "../_global/modules/translate/translate.module";
import { BrowserModule } from "@angular/platform-browser";
import { ValidationErrorsModule } from "../_global/modules/validation-errors/validationErrors.module";
import { ReactiveFormsModule } from "@angular/forms";
import { BoardComponent } from "./board.component";
import { ItemsTableComponent } from "./items-table/items-table.component";

@NgModule({
  imports: [
    TranslateModule,
    BrowserModule,
    ValidationErrorsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SendItemComponent,
    BoardComponent,
    ItemsTableComponent
  ],
  exports: [
    SendItemComponent,
    BoardComponent,
    ItemsTableComponent
  ],
  providers: [

  ]
})

export class BoardModule {}
