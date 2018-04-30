import React from "react";
import NukaCarousel from "nuka-carousel";

const Carousel = () => {
  return (
    <NukaCarousel
      renderCenterLeftControls={() => null}
      renderCenterRightControls={() => null}
      initialSlideHeight={400}
    >
      {[1, 2, 3, 4].map(key => (
        <img
          key={key}
          src="http://placehold.it/1000x400/ff0022/c0392b/&text=slide1"
          srcSet={`http://placehold.it/250/ff0022/c0392b/&text=slide250-${key} 250w, http://placehold.it/1000x550/ff0022/c0392b/&text=slide550-${key} 550w, http://placehold.it/650x400/ff0022/c0392b/&text=slide650-${key} 650w,`}
          sizes={"100vw"}
        />
      ))}
    </NukaCarousel>
  );
};

export default Carousel;
