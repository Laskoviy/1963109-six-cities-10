type Props = {
    src: string;
  }

function PropertyPicture({ src }: Props): JSX.Element {
  return (
    <div className="property__image-wrapper">
      <img
        src={src}
        className="property__image"
        alt="Studio"
      />
    </div>
  );
}

export default PropertyPicture;
