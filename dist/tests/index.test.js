"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../app/index");
test("When retrieving a key that has not be set return an empty value", () => {
    const redis = new index_1.Redis();
    const value = redis.get("source");
    expect(value).toEqual("");
});
test("When setting a key with a value we will retrieve the value when querying with a key", () => {
    const redis = new index_1.Redis();
    redis.set("afine", "borcan");
    const takeValue = redis.get("afine");
    expect(takeValue).toEqual("borcan");
});
class Dimensiunea {
    constructor(value, unit) { }
}
class Borcan {
    constructor(material, dimensiunea, continut) { }
}
test("", () => {
    const redis = new index_1.Redis();
    const b = new Borcan("sticla", new Dimensiunea(1, "l"), "dulceata");
    const s = JSON.stringify(b);
    redis.set("afine", s);
    const value = redis.get("afine");
    expect(value).toEqual(s);
});
