import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
  
}

#root {
  background: repeating-linear-gradient(45deg, black 1% 3%, #4d140c 5% 1%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 101vh;
  padding: 50px;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}


p {
    padding: 0;
    margin: 0;
}

h1, h2, h3 {
  margin: 0;
}

a {
  text-decoration: none;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: currentColor;
}

ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;
