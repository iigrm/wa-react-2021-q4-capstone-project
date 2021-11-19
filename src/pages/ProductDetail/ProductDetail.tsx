import React from "react";
import { useParams } from "react-router-dom";
import { AddTocartButton } from "../../components/AddToCartButton/AddToCartButton";
import { Layout } from "../../components/Layout/Layout";
import { LoadingView } from "../../components/LoadingView/LoadingView";
import { ProductDescription } from "../../components/ProductDescription/ProductDescription";
import { ProductImage } from "../../components/ProductImage/ProductImage";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";
import { ProductSpecs } from "../../components/ProductSpecs/ProductSpecs";
import { Typography } from "../../components/Typogrphy/Typography";
import { useProductDetail } from "../../hooks/useProductDetail";

import * as S from "./ProductDetailWrapper.style";

export const ProductDetail = () => {
  const { productid } = useParams<{ productid?: string }>();

  const { data, isLoading } = useProductDetail(productid);

  if (isLoading) return <LoadingView />;

  return (
    <>
      {data && !isLoading && (
        <Layout>
          <S.ProductDetailWrapper>
            <S.ProductImageWrapper>
              <Typography variant="h2" data-testid="product-detail-name">
                {data.name}
              </Typography>
              <Typography
                variant="h6"
                color="#666"
                data-testid="product-detail-sku"
              >
                SKU: {data.sku}
              </Typography>
              <ProductImage product={data} />
            </S.ProductImageWrapper>
            <S.ProductDescription>
              <AddTocartButton
                product={data}
                data-testid="product-detail-button"
              />
              <ProductInfo product={data} />
              <ProductDescription product={data} />
              <ProductSpecs product={data} />
            </S.ProductDescription>
          </S.ProductDetailWrapper>
        </Layout>
      )}
    </>
  );
};
