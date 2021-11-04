import React from "react";
import { ProductType } from "../../models/ProductType";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import * as S from "./ProductImage.style";
type Props = {
  product: ProductType;
};

export const ProductImage = (props: Props) => {
  const images = props.product.images.map((image) => ({
    original: image,
    thumbnail: image,
  }));

  return (
    <S.ProductImageWrapper>
      <ImageGallery
        items={images}
        showBullets={false}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={true}
        showPlayButton={false}
        showNav={false}
      />
    </S.ProductImageWrapper>
  );
};
