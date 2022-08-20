import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
  --font-primary: "PP Neue Montreal";
  --primary: black;

 
}

@font-face {
  font-family: "PP Neue Montreal";
  src: url("/fonts/PPNeueMontreal-Light.otf") format("otf");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}


html,
body {
  font-size: calc(60% + 0.8vmin);
  scroll-behavior: smooth;
  height: 100%;
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

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
