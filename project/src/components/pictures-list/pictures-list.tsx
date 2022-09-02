import React from 'react';
import PropertyPicture from '../property/property-picture';

type Props = {
    imagesList: string[]
  }

const PicturesList: React.FC<Props> = ({ imagesList }) => {
  const imagesLimitCount = imagesList.slice(0, 6);
  return (
    <div className="property__gallery">
      {imagesLimitCount.map((src) => <PropertyPicture key={src} src={src} alt={''} />)}
    </div>
  );
};

export default PicturesList;
