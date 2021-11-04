import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    color: #06BAD9;
  }

  .image-gallery {
    max-width: 100%;
    height: auto;
}

.image-gallery-slide img {
    max-width: 100%;
    height: auto !important;
    max-height: 60vh !important;
    object-fit: cover;
    overflow: hidden;
    object-position: center center;
}

.fullscreen .image-gallery-slide img {
    max-height: 100vh;
}
`;

export default GlobalStyle;
