const ImageCard = ({ imgUrl, imgDescr }) => {
  return (
    <div>
      <img src={imgUrl} alt={imgDescr} width={450} height={270} />
    </div>
  );
};

export default ImageCard;
