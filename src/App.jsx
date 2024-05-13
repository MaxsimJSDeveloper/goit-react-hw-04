import { useState, useEffect } from "react";
import "./App.css";
import ArticleList from "./components/ImageGallery/ImageGallery";
import { fetchArticlesWithTopic } from "./articles-api";
import SearchForm from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import Error from "./components/ErrorMessage/ErrorMessage";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchArticlesWithTopic(query, page);
        if (page === 1) {
          setArticles(data);
        } else {
          setArticles((prevArticles) => [...prevArticles, ...data]);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (query !== "") {
      fetchData();
    }
  }, [query, page]); // Додано залежності query і page

  const handleSearch = async (topic) => {
    setArticles([]);
    setError(false);
    setQuery(topic);
    setPage(1);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
      {articles.length > 0 && (
        <button onClick={loadMore} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default App;
