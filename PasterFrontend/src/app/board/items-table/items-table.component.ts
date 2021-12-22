import {Component, OnInit} from '@angular/core';
import {BoardService} from "../board.service";

@Component({
  selector: 'app-board-items-list',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss']
})
export class ItemsTableComponent implements OnInit {
  title = 'copy/paste board';
  //mapper = new DtoMapper<BoardItemResponseDTO, BoardItem>(

  constructor(private boardService: BoardService) {
    //this.boardItems = [];
    /*this.mapper.setSchema(new Map<string, any>([
      ["id", false]
    ]))*/
  }

  ngOnInit(): void {
    this.refreshContent();
  }

  refreshContent(): void {
    this.boardService.getItems()
    .subscribe((data) => {
      console.log("prijate itemy");
      console.log(data);
      //this.responseData = data;

      //console.log(data.items.length);
      //let typ = BoardItem.prototype.instance;
      //let mappedData = data.items.map(item => this.mapper.remap(item));
      //console.log(mappedData);
     // console.log(data);
      /*type Person = {
        name: string, age: number, id: number,
      }*/
      //let me: Person;

      //type P1 = Person["name"];
      //console.log(Object.keys(P1));
      //type K1 = keyof Person;

      //console.log(K1);

      //Object.keys(me)
      //Object.getOwnPropertyNames(me);
      //Object.getOwnPropertyDescriptors(me);

      //let sot = Person.keys;*/

      /*Object.keys(me).forEach(key => {
        // 💥 the next line throws red squigglies at us
        console.log(me[key])
      })*/
    });
  }

}
