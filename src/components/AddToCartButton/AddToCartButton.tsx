import React, { useState } from "react";
import { ProductType } from "../../models/ProductType";
import { Button } from "../Button/Button";
import { useAppDispatch } from "../../AppStore";
import { addOrUpdateItem } from "../../pages/Cart/CartSlice";

import * as S from "./AddToCart.style";

type Props = {
  product: ProductType;
  "data-testid"?: string;
};

export const AddTocartButton = (props: Props) => {
  const quantityLimit = props.product.stock;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    product: ProductType
  ) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addOrUpdateItem({ product, quantity: quantity }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setQuantity(parseInt(event.target.value));
  };

  const items = new Array(quantityLimit);
  items.fill(1);

  return (
    <S.AddToCartBottomWrapper>
      <S.Label>Quantity:</S.Label>
      <S.Select
        onChange={handleChange}
        value={quantity}
        disabled={props.product.stock === 0}
      >
        {items.map((item, idx) => (
          <option value={idx + 1} key={`quantity_${idx}`}>
            {idx + 1}
          </option>
        ))}
      </S.Select>
      <Button
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          handleClick(event, props.product)
        }
        data-testid={props["data-testid"]}
        disabled={props.product.stock === 0}
      >
        Add to cart
      </Button>
    </S.AddToCartBottomWrapper>
  );
};
