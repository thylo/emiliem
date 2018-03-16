import React from "react";
import styled from "styled-components";
import { DuotoneImage } from "react-duotone";
import { beige, darkGreen } from "../../Colors";

const Image = styled.img`
  margin: 0;
  -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`;

const BaseImage = styled.img`
  margin: 0;
  -webkit-clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`;

const ImageWrapper = styled.div`
  position: relative;
`;

export const DiamondImage = ({ image, size }) => {
  if (!image) return <div />;
  return (
    <ImageWrapper>
      {image &&
          <Image
            src={`/images/${size}-${image.replace('/uploads/','')}`}
            alt=""
            primaryColor={beige}
            secondaryColor={darkGreen}
          />
        }
    </ImageWrapper>
  );
};
