const ImageCard = ({ imgUrl, imgDescr, onClick }) => {
  const handleClick = () => {
    onClick(imgUrl);
  };

  return (
    <div onClick={handleClick}>
      <img src={imgUrl} alt={imgDescr} width={450} height={270} />
    </div>
  );
};

export default ImageCard;
