import ImageCard from "../ImageCard/ImageCard";

const ArticleList = ({ items, onImageClick }) => (
  <ul>
    {items.map(({ id, urls, slug }) => (
      <li key={id}>
        <ImageCard imgUrl={urls.small} imgDescr={slug} onClick={onImageClick} />
      </li>
    ))}
  </ul>
);

export default ArticleList;
