export interface ProductsInput {
  page: number;
  results_per_page: number;
  results_size: number;
  total_results_size: number;
  total_pages: number;
  next_page?: null;
  prev_page?: null;
  results?: ResultsType[] | null;
  version: string;
  license: string;
}
export interface ResultsType {
  id: string;
  uid?: null;
  url?: null;
  type: string;
  href: string;
  tags?: string[] | null;
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
  name: string;
  sku: string;
  category: Category;
  mainimage: Mainimage;
  short_description: string;
  description?: (DescriptionEntity | null)[] | null;
  specs?: SpecsEntity[] | null;
  images?: ImagesEntity[] | null;
  stock: number;
  price: number;
}
export interface Category {
  id: string;
  type: string;
  tags?: null[] | null;
  slug: string;
  lang: string;
  first_publication_date: string;
  last_publication_date: string;
  link_type: string;
  isBroken: boolean;
}
export interface Mainimage {
  dimensions: Dimensions;
  alt: string;
  copyright?: null;
  url: string;
}
export interface Dimensions {
  width: number;
  height: number;
}
export interface DescriptionEntity {
  type: string;
  text: string;
  spans?: null[] | null;
}
export interface SpecsEntity {
  spec_name: string;
  spec_value: string;
}
export interface ImagesEntity {
  image: Image;
}
export interface Image {
  dimensions: Dimensions;
  alt?: null;
  copyright?: null;
  url: string;
}
