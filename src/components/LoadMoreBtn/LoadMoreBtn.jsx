const LoadMoreBtn = ({ onClick, loading }) => {
  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? "Loading..." : "Load More"}
    </button>
  );
};

export default LoadMoreBtn;
