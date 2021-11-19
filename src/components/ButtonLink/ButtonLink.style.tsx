import styled from "styled-components";

export const ButtonLink = styled.button`
  background: transparent;
  outline: 0;
  text-decoration: none;
  border: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:disabled {
    cursor: not-allowed;
    text-decoration: none;
    color: #bfd3ef !important;
  }
`;
