import React from "react";
import { ProductType } from "../../models/ProductType";
import { PaginationType } from "../../models/PaginationType";
import { ProductCard } from "../ProductCard/ProductCard";

import * as S from "./ProductsGrid.style";
import { Pagination } from "../Pagination/Pagination";

type Props = {
  products: ProductType[];
  pagination: PaginationType;
  onSetPage: (page: number) => void;
  showPagination: boolean;
};

export const ProductsGrid = (props: Props) => {
  return (
    <div>
      <S.ProductsGridWrapper>
        {props.products.map((product) => (
          <ProductCard product={product} key={`${product.id}`} />
        ))}
      </S.ProductsGridWrapper>

      {props.showPagination && (
        <div>
          <Pagination
            totalPages={props.pagination.totalPages}
            page={props.pagination.page}
            totalResults={props.pagination.totalPages}
            onSetPage={props.onSetPage}
          />
        </div>
      )}
    </div>
  );
};
