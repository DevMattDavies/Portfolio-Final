import GlobalStyle from "../public/GlobalStyles.styles";
import "../styles/globals.css";
// import AnimatedCursor from "react-animated-cursor";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AnimatedCursor
        color="0,0,0"
        outerScale={3}
        trailingSpeed={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "h3",
          "button",
          ".link",
        ]}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
