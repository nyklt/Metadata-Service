"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const source_1 = require("./source");
function convertToSource(item) {
    return new source_1.Source(item.source_id, item.slug, item.name, item.aml_types, item.country_codes);
}
exports.convertToSource = convertToSource;
