export class Source {
  constructor(
    readonly sourceId: string,
    readonly key: string,
    readonly name: string,
    readonly amlTypes: string,
    readonly countryCodes: string
  ) {
    this.sourceId = sourceId;
    this.key = key;
    this.name = name;
    this.amlTypes =  amlTypes;
    this.countryCodes = countryCodes;
  }
}
