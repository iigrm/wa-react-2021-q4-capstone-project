import styled from "styled-components";

export const SliderWrapper = styled.div`
  display: flex;
  width: 100%;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  overflow-y: hidden;

  // Hide scroll
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    background: transparent; /* Chrome/Safari/Webkit */
    width: 0px;
  }
`;

export const SlideWrapper = styled.div`
  flex: 0 0 100%;
  width: 100%;
  object-fit: cover;
  scroll-snap-align: center;
  position: relative;
`;

export const ImageSlider = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const TitleSlider = styled.div`
  position: absolute;
  background: rgba(250, 250, 250, 0.7);
  top: 10%;
  padding: 30px;
  font-size: 1.5rem;
  color: #333;
`;

export const DescriptionSlider = styled.div`
  position: absolute;
  background: rgba(100, 100, 100, 0.4);
  top: 40%;
  left: 10%;
  padding: 10px;
  font-size: 1.2rem;
  color: #fff;
`;

export const SliderControls = styled.div`
  position: absolute;
  bottom: 10px;
  position: absolute;
  bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SliderControl = styled.button<{ selected: boolean }>`
  height: 15px;
  width: 15px;
  border-radius: 15px;
  background: white;
  border: 0;
  margin: 0 16px;
  cursor: pointer;
  border: 1px solid #ddd;
  animation: 1s all linear;
  ${({ selected }) =>
    selected &&
    `
    width: 30px;
    background: rgba(7, 186, 217, 1);
  `}
`;
