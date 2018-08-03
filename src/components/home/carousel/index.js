import React from "react";
import NukaCarousel from "nuka-carousel";

const Carousel = ({ pictures }) => {
  const pics = pictures.map(({ image }) => {
    const sizes = [250, 320, 550, 650, 1024, 1920];

    return {
      original: `/images/1024x200-${image.replace("/uploads/", "")}`,
      srcset: sizes.map(
        size => `/images/${size}x200-${image.replace("/uploads/", "")} ${size}w`
      )
    };
  });
  console.log(pics);
  return (
    <NukaCarousel
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
      initialSlideHeight={400}
    >
      {pics.map(({ srcset, original }, key) => {
        return (
          <img
            key={key}
            src={original}
            srcSet={srcset.join(",")}
            sizes={"100vw"}
          />
        );
      })}
    </NukaCarousel>
  );
};

export default Carousel;
