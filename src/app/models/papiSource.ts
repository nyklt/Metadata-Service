
export class PAPISource {
  constructor(
    readonly source_id: string,
    readonly scraper_id: number,
    readonly slug: string,
    readonly name: string,
    readonly aml_types: string,
    readonly country_codes: string,
    readonly created: string,
    readonly updated: string,
  ){
    this.source_id = source_id;
    this.scraper_id = scraper_id;
    this.slug = slug;
    this.name = name;
    this.aml_types = aml_types;
    this.country_codes = country_codes,
    this.created = created;
    this.updated = updated;
  }
}