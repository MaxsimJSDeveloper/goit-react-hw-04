const LoadMoreBtn = ({ onLoadMore, hasMoreItems }) => {
  const handleClick = () => {
    onLoadMore();
  };

  return hasMoreItems && <button onClick={handleClick}>Load more</button>;
};

export default LoadMoreBtn;
