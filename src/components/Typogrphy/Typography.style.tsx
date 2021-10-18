import styled from "styled-components";

type Props = {
  color?: string;
  align?: string;
};

export const H1 = styled.h1<Props>`
  margin: 0;
  color: ${(props) => props.color || ""};
  text-align: ${(props) => props.align || "left"};
`;

export const H2 = styled.h2<Props>`
  margin: 0;
  color: ${(props) => props.color || ""};
  text-align: ${(props) => props.align || "left"};
`;
export const H3 = styled.h3<Props>`
  margin: 0;
  color: ${(props) => props.color || ""};
  text-align: ${(props) => props.align || "left"};
`;
export const H4 = styled.h4<Props>`
  margin: 0;
  color: ${(props) => props.color || ""};
  text-align: ${(props) => props.align || "left"};
`;
export const H5 = styled.h5<Props>`
  margin: 0;
  color: ${(props) => props.color || ""};
  text-align: ${(props) => props.align || "left"};
`;

export const H6 = styled.h6<Props>`
  margin: 0;
  color: ${(props) => props.color || ""};
  text-align: ${(props) => props.align || "left"};
`;

export const Span = styled.span<Props>`
  margin: 0;
  color: ${(props) => props.color || ""};
  text-align: ${(props) => props.align || "left"};
`;

export const P = styled.p<Props>`
  margin: 0;
  color: ${(props) => props.color || ""};
  text-align: ${(props) => props.align || "left"};
`;
