import { css } from "styled-components";
const sizes = {
  mobile: 320,
  tablet: 740,
  desktop: 980,
  wide: 1300
};

// Iterate through the sizes and create a media template
const MediaQuery = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default MediaQuery;
