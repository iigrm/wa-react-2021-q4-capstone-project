export interface FeaturedBannersType {
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
  slugs?: string[] | null;
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
  title: string;
  description?: DescriptionEntity[] | null;
  cta_link: string;
  cta_target: string;
  main_image: MainImage;
}
export interface DescriptionEntity {
  type: string;
  text: string;
  spans?: null[] | null;
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
