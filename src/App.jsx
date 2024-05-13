import { useState } from "react";
// Assuming Audio is a typo here, it should be Loader
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

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <Error />}
      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
};

export default App;
