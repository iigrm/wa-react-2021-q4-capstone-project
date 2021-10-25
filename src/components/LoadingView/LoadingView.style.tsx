import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 9999;
  display: flex;
`;

export const LoadingInner = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
