import ImageCard from "../ImageCard/ImageCard";

const ArticleList = ({ items }) => (
  <ul>
    {items.map(({ id, urls, slug }) => (
      <li key={id}>
        <ImageCard imgUrl={urls.full} imgDescr={slug} />
      </li>
    ))}
  </ul>
);

export default ArticleList;
