import styled from "styled-components";

export const CardWrapper = styled.div<{ height: number; width: number }>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  margin: 8px;
  border: 1px solid #fefefe;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
