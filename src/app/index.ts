import {PapiDataRetriever,TransformData,TranslatedData,mapValues} from "./controller/retrieveSources";
import { PAPISource } from "./models/papiSource";
import { Source } from "./models/source";
import { convertToSource } from "./models/transform";
import { Redis } from "./redis/redis";

//const SourcesKey = "amlmetadata:sources";
export type Language = string;

const BaseKey = "amlmetadata";

const SourcesKey = (lang: string): string => `${BaseKey}:${lang}:sources`;

const redis = new Redis();
const papiSources = new PapiDataRetriever().retrieve;

const sources = new TransformData().transform(papiSources());

const translatedData = new TranslatedData().translateData(sources);

const mapTranslatedData = mapValues(translatedData, (s: Source[]) => JSON.stringify(s));

mapTranslatedData.forEach( (x, y)=> {
    redis.set(`${SourcesKey(y)}`, x);
})

//redis.set(SourcesKey, stringSources);
//  redis.set(`${SourcesKey('fr')}`, resultTranslatedData);
//const retrieved = redis.get(`fr/${SourcesKey}`);
const retrievedDe = redis.get(`${SourcesKey("de")}`);
const retrievedFr = redis.get(`${SourcesKey("fr")}`);
const retrievedXx = redis.get(`${SourcesKey("xx")}`);

console.log(`Retrieved De: ${retrievedDe}`);
console.log(`Retrieved Fr: ${retrievedFr}`);
console.log(`Retrieved Xx: ${retrievedXx}`);