import React from "react";
import { CartItemType } from "../../models/CartItemType";
import { formatPrice } from "../../utils/products";
import { ButtonLink } from "../ButtonLink/ButtonLink.style";
import { Typography } from "../Typogrphy/Typography";
import { addOrUpdateItem, removeItem } from "../../pages/Cart/CartSlice";
import { useAppDispatch } from "../../AppStore";

import * as S from "./CartItem.style";

type Props = {
  cartItem: CartItemType;
  quantityEditable?: boolean;
};

export const CartItem = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleUpdate = (
    event: React.ChangeEvent<HTMLSelectElement>,
    cartItem: CartItemType
  ) => {
    const quantity = parseFloat(event.currentTarget.value);
    dispatch(addOrUpdateItem({ ...cartItem, quantity }));
  };

  const handleRemove = (cartItem: CartItemType) => {
    dispatch(removeItem(cartItem));
  };

  const items = new Array(props.cartItem.product.stock);
  items.fill(1);

  return (
    <S.CartItemWrapper>
      <S.CartItemImageWrapper>
        <S.CartItemImage src={props.cartItem.product.imageUrl} />
        {props.quantityEditable && (
          <ButtonLink onClick={() => handleRemove(props.cartItem)}>
            Remove
          </ButtonLink>
        )}
      </S.CartItemImageWrapper>
      <S.CartProductInfo>
        <Typography variant="h4">{props.cartItem.product.name}</Typography>
        <Typography variant="h6" color="#666">
          SKU: {props.cartItem.product.sku}
        </Typography>
        <Typography variant="h4" color="#526b89">
          Price: {formatPrice(props.cartItem.product.price)}
        </Typography>
      </S.CartProductInfo>
      <S.CartItemSubTotal>
        <Typography variant="h4">Quantity:</Typography>
        {props.quantityEditable ? (
          <S.Select
            onChange={(event) => handleUpdate(event, props.cartItem)}
            value={props.cartItem.quantity}
          >
            {items.map((item, idx) => (
              <option value={idx + 1} key={`cart_quantity_${idx}`}>
                {idx + 1}
              </option>
            ))}
          </S.Select>
        ) : (
          <div style={{ marginRight: "8px" }}>
            <Typography variant="h4">{props.cartItem.quantity}</Typography>
          </div>
        )}
        <Typography variant="h4">
          Subtotal:
          {formatPrice(props.cartItem.product.price * props.cartItem.quantity)}
        </Typography>
      </S.CartItemSubTotal>
    </S.CartItemWrapper>
  );
};
