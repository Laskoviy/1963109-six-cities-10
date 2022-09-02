import React from 'react';

type Props = {
  src: string
}


const PropertyPicture: React.FC<Props> = ({ src }) => (
  <div className="property__image-wrapper">
    <img
      src={src}
      className="property__image"
      alt="Studio"
    />
  </div>
);

export default PropertyPicture;
