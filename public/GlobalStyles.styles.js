import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
  --font-primary: "pp_neue_montrealthin";
  --primary: black;

 
}


${'' /* @font-face {
    font-family: 'pp_neue_montrealthin';
    src: url('/fonts/ppneuemontreal-thin-webfont.woff2') format('woff2'),
         url('/fonts/ppneuemontreal-thin-webfont.woff') format('woff'),
         url('/fonts/ppneuemontreal-thin-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

} */}


html,
body {
  font-size: calc(60% + 0.8vmin);
  scroll-behavior: smooth;
  height: 100%;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-font-smoothing: antialiased;

}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  font-family: var(--font-primary);
  font-size: 1rem;
  padding: 0;
  margin: 0;
  cursor: default;
}

`;

export default GlobalStyle;
