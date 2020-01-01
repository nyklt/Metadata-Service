import {PAPISource} from './papiSource';
import {Source} from './source';

export function convertToSource(item: PAPISource): Source {
  return new Source(item.source_id, item.slug, item.name, item.aml_types, item.country_codes);
}
