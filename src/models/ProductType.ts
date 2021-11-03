export type ProductType = {
  id: string;
  name: string;
  sku: string;
  imageUrl: string;
  category: string;
  stock: number;
  price: number;
  images: string[];
  description?: string;
  tags?: string[];
  categorySlug: string;
  categoryName?: string;
  specs?: { specName: string; specValue: string }[];
};
