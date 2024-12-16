import { nanoid } from 'nanoid';
import React from 'react';

const ImageGalleryItem = ({ imagesData }) => {
  return (
    <>
      {imagesData.map(({ id, webformatURL }) => (
        <li key={nanoid()} className="galleryItem">
          <img src={webformatURL} alt="" />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
