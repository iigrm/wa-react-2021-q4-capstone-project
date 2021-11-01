import React from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Layout } from "../../components/Layout/Layout";
import { LoadingView } from "../../components/LoadingView/LoadingView";
import { ProductDescription } from "../../components/ProductDescription/ProductDescription";
import { ProductImage } from "../../components/ProductImage/ProductImage";
import { ProductInfo } from "../../components/ProductInfo/ProductInfo";
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
            <S.ProductInfoWrapper>
              <ProductInfo product={data} />
            </S.ProductInfoWrapper>
            <S.ProductImageWrapper>
              <ProductImage product={data} />
            </S.ProductImageWrapper>
            <S.ButtonWrapper>
              <Button onClick={() => {}}>Add to cart </Button>
            </S.ButtonWrapper>
            <S.ProductDescription>
              <ProductDescription product={data} />
            </S.ProductDescription>
          </S.ProductDetailWrapper>
        </Layout>
      )}
    </>
  );
};
