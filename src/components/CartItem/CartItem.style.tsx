import styled from "styled-components";

export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #999;
  padding: 16px;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

export const CartItemImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductWrapper = styled.div`
  display: flex;
  width: 70%;
`;

export const CartItemImage = styled.img`
  width: 100px;
`;

export const CartProductInfo = styled.div`
  padding: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CartItemSubTotal = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  margin-right: 16px;
  margin-left: 16px;
  height: 46px;
  width: 46px;
`;
