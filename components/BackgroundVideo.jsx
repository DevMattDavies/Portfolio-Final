import styled from "styled-components";
import BackgroundGraphic from "../public/assets/background.mp4";

const backgroundStyle = {
  width: "177.77777778vh",
  height: "100%",
  minWidth: "100%",
  minHeight: "56.25vw",
  position: "fixed",
  top: "0",
  right: "0",
  overflow: "hidden",
  objectFit: "fill",
  zIndex: "-10",
};

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
  object-fit: fill;
  z-index: -10;
`;

export default function BackgroundVideo() {
  return (
    <>
      {/* <BackgroundContainer> */}
      <video style={backgroundStyle} autoPlay loop muted playsInline>
        <source src={BackgroundGraphic} type="video/mp4" />
      </video>
      {/* </BackgroundContainer> */}
    </>
  );
}
