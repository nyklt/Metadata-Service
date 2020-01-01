import { Redis } from "../app/redis/redis";
import {PAPISource} from "../app/models/papiSource";
import {Source} from "../app/models/source";
import {convertToSource} from "../app/models/transform";
import {PapiDataRetriever, TransformData, ConvertData,TranslatedData,mapValues} from '../app/controller/retrieveSources';

test("When retrieving a key that has not be set return an empty value", () => {
  const redis = new Redis();

  const value = redis.get("source");

  expect(value).toEqual("");
});

test("When setting a key with a value we will retrieve the value when querying with a key", () => {
  const redis = new Redis();

  redis.set("afine", "borcan");
  const takeValue = redis.get("afine");

  expect(takeValue).toEqual("borcan");
});



type Material = "sticla" | "plastic" | "lemn";

class Dimensiunea {
  constructor(value: number, unit: string) {}
}

class Borcan<A> {
  constructor(material: Material, dimensiunea: Dimensiunea, continut: A) {}
}

test("", () => {
  const redis = new Redis();

  const b = new Borcan("sticla", new Dimensiunea(1, "l"), "dulceata");
  const s = JSON.stringify(b);

  redis.set("afine", s);

  const value = redis.get("afine");

  expect(value).toEqual(s);
});


test("Retrieving sources from our mock-up data", () => {
  const SourcesKey = "sources";
  const redis = new Redis()
  const papiSources = new PapiDataRetriever().retrieve;
  const sources =  new TransformData().transform(papiSources());
  const stringSources =  new ConvertData().convertToJson(sources);


  redis.set(SourcesKey, stringSources);

  const retrieved = redis.get(SourcesKey);
  console.log('retrieved', retrieved);
  console.log('string', stringSources);

  expect(retrieved).toEqual(stringSources);
})

test("Retrieving the sources that are written in Fr language from our mock-up data", () => {

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

const retrievedFr = redis.get(`${SourcesKey("fr")}`);

console.log(`Retrieved Fr: ${retrievedFr}`);

})
