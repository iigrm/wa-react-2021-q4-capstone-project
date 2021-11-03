import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const ItemWrapper = styled.div<{ selected?: boolean }>`
  border: 1px solid black;
  padding: 5px;
  background-color: ${(props) =>
    props.selected ? "rgba(30, 68, 199, 1)" : "transparent"};
  color: ${(props) => (props.selected ? "white" : "black")};
`;
