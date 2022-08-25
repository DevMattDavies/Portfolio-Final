import styled from "styled-components";
import BackgroundGraphic from "../public/assets/background.mp4";

const backgroundStyleDesktop = {
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

const backgroundStyleMobile = {
  minHeight: "100%",
  minWidth: "100%",
  position: "fixed",
  top: "0",
  left: "0",
  overflow: "hidden",
  objectFit: "fill",
  zIndex: "-10",
};

const BackgroundContainer = styled.div`
  border: 2px solid orange;
  height: 100%;
  width: 100%;
  position: fixed;
  top: -80%;
  left: 400px;
  transform: rotate(90deg);
`;

export default function BackgroundVideo({ width }) {
  return (
    <>
      {width >= 500 ? (
        <video style={backgroundStyleDesktop} autoPlay loop muted playsInline>
          <source src={BackgroundGraphic} type="video/mp4" />
        </video>
      ) : (
        <BackgroundContainer>
          <video style={backgroundStyleMobile} autoPlay loop muted playsInline>
            <source src={BackgroundGraphic} type="video/mp4" />
          </video>
        </BackgroundContainer>
      )}
    </>
  );
}
