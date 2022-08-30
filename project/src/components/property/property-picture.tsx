import React from 'react';

type Props = {
    src: string;
    alt: string;
  }

const PropertyPicture: React.FC<Props> = ({ src, alt }) => (
  <div className="property__image-wrapper">
    <img
      src={src}
      className="property__image"
      alt={alt}
    />
  </div>
);

export default PropertyPicture;
