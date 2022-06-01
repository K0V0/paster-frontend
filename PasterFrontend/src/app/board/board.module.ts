import { NgModule } from "@angular/core";
import { SharedModule } from "../_SharedModule/shared.module";
import { BoardComponent } from "./components/board.component";
import { ItemsTableComponent } from "./components/items-table/items-table.component";
import { SendItemComponent } from "./components/send-item/send-item.component";
import { BoardService } from "./services/board.service";

@NgModule({
  imports: [
    SharedModule
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
    BoardService
  ]
})

export class BoardModule {}
