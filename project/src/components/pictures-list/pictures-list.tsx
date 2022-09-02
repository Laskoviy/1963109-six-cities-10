import React from 'react';
import { ImageLimit } from '../../const';
import PropertyPicture from '../property/property-picture';

type Props = {
  imagesList: string[]
}

const ImagesList: React.FC<Props> = ({ imagesList }) => {
  const imagesLimitCount = imagesList.slice(ImageLimit.Start, ImageLimit.End);
  return (
    <div className="property__gallery">
      {imagesLimitCount.map((src) => <PropertyPicture key={src} src={src} />)}
    </div>
  );
};

export default ImagesList;
