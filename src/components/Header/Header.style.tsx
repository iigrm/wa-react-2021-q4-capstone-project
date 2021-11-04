import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background: linear-gradient(
    90deg,
    rgba(7, 186, 217, 1) 25%,
    rgba(30, 68, 199, 1) 100%
  );
  width: 100vw;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  // box-shadow: 1px 4px 10px rgba(141, 127, 127, 0.5);
  z-index: 1;
`;

export const Input = styled.input`
  border: 0px;
  border-radius: 8px;
  height: 24px;
  width: 100%;
  margin-left: 8px;
  margin-right: 8px;
  padding: 8px;
  outline: 0;
`;
