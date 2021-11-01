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
  categoryName?: string;
};
