import { convertToSource } from "../models/transform";
import { Source } from "../models/source";
import { PAPISource } from "../models/papiSource";

export class PapiDataRetriever {
  retrieve(): PAPISource[] {
    const sourceData = [
      {
        source_id: "Source ID",
        scraper_id: 1,
        slug: "Slug",
        name: "Name",
        aml_types: "Aml types",
        country_codes: "Country codes",
        created: "Created",
        updated: "Updated"
      },
      {
        source_id: "Source ID 2",
        scraper_id: 2,
        slug: "Slug 2",
        name: "Name 2",
        aml_types: "Aml types 2",
        country_codes: "Country codes 2",
        created: "Created 2",
        updated: "Updated 2"
      },
      {
        source_id: "Source ID 3",
        scraper_id: 3,
        slug: "Slug 3",
        name: "Name 3",
        aml_types: "Aml types 3",
        country_codes: "Country codes 3",
        created: "Created 3",
        updated: "Updated 3"
      }
    ];

    return sourceData;
  }
}

export class TransformData{
  transform(papiSource: PAPISource[]): Source[] {
    return papiSource.map(convertToSource);
  }
}




export type Language = string;
export const NoLang: Language = 'xx';
export type MetadataTranslations = Map<Language, Source[]>;

export class TranslatedData{
   translateData(sources: Source[]): MetadataTranslations {
    return new Map([
      [NoLang, sources],
      [
        'de',
         sources.map(
            s => new Source(s.sourceId, s.key, `Das ${s.name}`, s.amlTypes, s.countryCodes),
          ),
      ],
      [
        'fr',
          sources.map(
            s => new Source(s.sourceId, s.key, `Le ${s.name}`, s.amlTypes, s.countryCodes),
          ),
      ],
    ]);
  }
}


export function mapValues<K, V, X>(m: Map<K, V>, f: (v: V) => X): Map<K, X> {
  return new Map(Array.from(m, ([key, value]) => [key, f(value)]));
}


// export class StringifyData{
//   stringifyDataSources(sources: Source[]): string {
//     const toSource = new Map(sources.map(x => [x.sourceId, x]));
//     //return mapValues(toSource, (s: Source) => JSON.stringify(s))
//     return JSON.stringify(toSource);
//   }
// }

export class ConvertData{
  convertToJson(sources: Source[]): string { 
    return  JSON.stringify(sources);
  }
}