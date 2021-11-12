import styled from "styled-components";

export const CartButtonWrapper = styled.button`
  height: 100%;
  padding: 0 16px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
  background: transparent;
  border: 0;
  margin-right: 16px;
  position: relative;
  &:hover {
    color: #efefef;
  }
`;

export const Badge = styled.div`
  height: 16px;
  width: 16px;
  font-size: 9px;
  border-radius: 12px;
  background: red;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 6px;
  right: 0px;
`;
