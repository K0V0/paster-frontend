import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DtoMapper<Source, Destination> {
  //private schema: Map<string, any>;
  private schema: any;

  /*constructor() {
    this.schema = new Map<string, any>();
  }*/

  /*public setSchema(schema: Map<string, any>): void {
    this.schema = schema;
  }*/

  public setSchema(schema: {}) {
    this.schema = schema;
  }

  remap(t: any): Destination {
    let result: any = {};
    //t['kok']
    //console.log(Object.keys(t));
    Object.keys(t).map(key => {
      //return null;
      if (this.schema[key] === undefined) {
        Symbol()
      }
      //let schemaCommand: any = this.schema[key]; // moze byt undefined
      //let schemaCommandType: string = typeof schemaCommand;
      /*if (schemaCommandType != "undefined" && schemaCommandType == "function") {

      } else if (schemaCommandType != "undefined" && schemaCommandType == "boolean" && !(schemaCommand as boolean)) {

      } else {
        //result[key] = t[key];
        console.log(schemaCommand);
      }*/
    });
    //if (Destination in t)
    //console.log(Object.keys(rnd as Destination));
    //let sth: Model = new Destination
    //console.log(Object.keys(new Destination));
    //rnd = t as unknown as Destination;
    //console.log(rnd as Object);
    //let obj = Object.fromEntries(iterable);
    //let o2 = Object.create(rnd);
    //rnd = new Destination;
    //rnd['kkt'] = "pici";
    //console.log(o2);

    return result;
  }

}

