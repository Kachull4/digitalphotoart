"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { FC, useState } from "react";
import { GalleryBox } from "./styled";
import { Modal } from "../modal";
import { SwiperGallery } from "../swiper";
import { AnimatedOnScroll } from "../animated-on-scroll";

type Props = {
  images: StaticImport[];
};

export const Gallery: FC<Props> = ({ images }) => {
  const [activeModalIndex, setActiveModalIndex] = useState(-1);

  const handleCloseModal = () => {
    setActiveModalIndex(-1);
  };

  return (
    <GalleryBox>
      {images.map((image, index) => (
        <AnimatedOnScroll key={index}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={300}
            onClick={() => setActiveModalIndex(index)}
          />
        </AnimatedOnScroll>
      ))}
      <Modal show={activeModalIndex >= 0} onClose={handleCloseModal}>
        <SwiperGallery
          images={images}
          defaultIndex={activeModalIndex}
        ></SwiperGallery>
      </Modal>
    </GalleryBox>
  );
};
