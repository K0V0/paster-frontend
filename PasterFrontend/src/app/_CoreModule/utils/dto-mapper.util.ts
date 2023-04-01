import { Injectable } from "@angular/core";

export interface Schema {
  [key: string]: boolean | Function | string | number | null;
}

// TODO naucit mapper pracovat aj rekurzivne

@Injectable({
  providedIn: 'root'
})
export class DtoMapperUtil<Source extends {}, Destination> {
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
      let schemaCommand = this.conversionRules[key];
      if (schemaCommand !== null) {
        if (schemaCommand === undefined) {
          result[key] = source[key];
        } else if (typeof schemaCommand === 'function') {
          result[key] = schemaCommand(source[key]);
        } else {
          result[key] = schemaCommand;
        }
      }
    });
    return result;
  }

}

