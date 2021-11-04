export interface ApiRefType {
  refs: RefsEntity[] | null;
  integrationFieldsRef?: null;
  bookmarks: FieldsOrBookmarks;
  types: Types;
  languages?: LanguagesEntity[] | null;
  tags?: string[] | null;
  forms: Forms;
  oauth_initiate: string;
  oauth_token: string;
  version: string;
  experiments: Experiments;
  license: string;
}
export interface RefsEntity {
  id: string;
  ref: string;
  label: string;
  isMasterRef: boolean;
}
export interface FieldsOrBookmarks {}
export interface Types {
  product: string;
  category: string;
  banner: string;
}
export interface LanguagesEntity {
  id: string;
  name: string;
}
export interface Forms {
  everything: Everything;
  tags: Tags;
}
export interface Everything {
  method: string;
  enctype: string;
  action: string;
  fields: Fields;
}
export interface Fields {
  ref: RefOrQOrLangOrAfterOrFetchOrFetchLinksOrGraphQueryOrOrderingsOrReferer;
  q: RefOrQOrLangOrAfterOrFetchOrFetchLinksOrGraphQueryOrOrderingsOrReferer;
  lang: RefOrQOrLangOrAfterOrFetchOrFetchLinksOrGraphQueryOrOrderingsOrReferer;
  page: PageOrPageSize;
  pageSize: PageOrPageSize;
  after: RefOrQOrLangOrAfterOrFetchOrFetchLinksOrGraphQueryOrOrderingsOrReferer;
  fetch: RefOrQOrLangOrAfterOrFetchOrFetchLinksOrGraphQueryOrOrderingsOrReferer;
  fetchLinks: RefOrQOrLangOrAfterOrFetchOrFetchLinksOrGraphQueryOrOrderingsOrReferer;
  graphQuery: RefOrQOrLangOrAfterOrFetchOrFetchLinksOrGraphQueryOrOrderingsOrReferer;
  orderings: RefOrQOrLangOrAfterOrFetchOrFetchLinksOrGraphQueryOrOrderingsOrReferer;
  referer: RefOrQOrLangOrAfterOrFetchOrFetchLinksOrGraphQueryOrOrderingsOrReferer;
}
export interface RefOrQOrLangOrAfterOrFetchOrFetchLinksOrGraphQueryOrOrderingsOrReferer {
  type: string;
  multiple: boolean;
}
export interface PageOrPageSize {
  type: string;
  multiple: boolean;
  default: string;
}
export interface Tags {
  method: string;
  enctype: string;
  action: string;
  fields: FieldsOrBookmarks;
}
export interface Experiments {
  draft?: null[] | null;
  running?: null[] | null;
}
