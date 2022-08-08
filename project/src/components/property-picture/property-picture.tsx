type Props = {
    src: string;
    alt: string;
  }

function PropertyPicture({ src, alt }: Props): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img
        src={src}
        className="property__image"
        alt={alt}
      />
    </div>
  );
}

export default PropertyPicture;
