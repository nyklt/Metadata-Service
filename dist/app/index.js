"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var transform_1 = require("./models/transform");
exports.convertToSource = transform_1.convertToSource;
class Redis {
    constructor() {
        //constructor(private readonly retriever: PapiDataRetriever) {}
        this.myMap = new Map();
    }
    get(key) {
        const x = this.myMap.get(key);
        console.log('test');
        return x || "";
    }
    set(key, value) {
        this.myMap.set(key, value);
    }
}
exports.Redis = Redis;
