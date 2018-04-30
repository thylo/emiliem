import React from "react";
import NukaCarousel from "nuka-carousel";

const Carousel = ({ pictures }) => {
  const pics = pictures.map(({ image }) => {
    const sizes = [250, 320, 550, 650, 1024, 1920];

    return sizes.map(
      size => `/images/${size}x200-${image.replace("/uploads/", "")} ${size}w`
    );
  });
  return (
    <NukaCarousel
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
      initialSlideHeight={200}
    >
      {pics.map((value, key) => {
        console.log(value);
        return (
          <img
            key={key}
            src={pictures[key].image}
            srcSet={value.join(",")}
            sizes={"100vw"}
          />
        );
      })}
    </NukaCarousel>
  );
};

export default Carousel;
