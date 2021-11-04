import styled from "styled-components";

export const SkeletonWrapper = styled.div<{ height: string; width: string }>`
  animation: shimmer 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;
