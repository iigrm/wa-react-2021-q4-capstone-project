export interface CategoryDataType {
  page: number;
  results_per_page: number;
  results_size: number;
  total_results_size: number;
  total_pages: number;
  next_page?: null;
  prev_page?: null;
  results?: ResultsEntity[] | null;
  version: string;
  license: string;
}
export interface ResultsEntity {
  id: string;
  uid?: null;
  url?: null;
  type: string;
  href: string;
  tags?: null[] | null;
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  linked_documents?: null[] | null;
  lang: string;
  alternate_languages?: AlternateLanguagesEntity[] | null;
  data: Data;
}
export interface AlternateLanguagesEntity {
  id: string;
  type: string;
  lang: string;
}
export interface Data {
  name: string;
  main_image: MainImage;
}
export interface MainImage {
  dimensions: Dimensions;
  alt: string;
  copyright?: null;
  url: string;
}
export interface Dimensions {
  width: number;
  height: number;
}
