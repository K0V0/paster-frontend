import { Injectable } from "@angular/core";

export interface Schema {
  [key: string]: boolean | Function | string | number | null;
}

@Injectable({
  providedIn: 'root'
})
export class DtoMapperService<Source, Destination> {
  private conversionRules: Schema;

  constructor() {
    this.conversionRules = {};
  }

  public setRules(schema: {}) {
    this.conversionRules = schema;
  }

  remap(input: Source): Destination {
    let source: Schema = input as unknown as Schema;
    let result: any = {}
    Object.keys(input).forEach(key => {
      //console.log(key);
      //console.log(this.conversionRules[key]);
      let schemaCommand = this.conversionRules[key];
      if (schemaCommand !== null) {
        if (schemaCommand === undefined) {
          //console.log("key: " + key + " is undefined");
          result[key] = source[key];
        } else if (typeof schemaCommand === 'function') {
          //console.log("key: " + key + " is Function()");
          //console.log(schemaCommand(5));
          result[key] = schemaCommand(source[key]);
        } else {
          //console.log("key: " + key + " is some value");
          result[key] = schemaCommand;
        }
      }
    });
    return result;
  }

}

