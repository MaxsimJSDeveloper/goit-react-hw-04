import css from "./ImageCard.module.css";

const ImageCard = ({ imgUrl, imgDescr, onClick }) => {
  const handleClick = () => {
    onClick(imgUrl);
  };

  return (
    <div className={css["image-card"]} onClick={handleClick}>
      <img src={imgUrl} alt={imgDescr} />
    </div>
  );
};

export default ImageCard;
