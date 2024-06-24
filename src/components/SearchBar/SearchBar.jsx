import toast from "react-hot-toast";
import { useState } from "react";
import css from "./SearchBar.module.css";

const SearchForm = ({ onSearch }) => {
  const [topic, setTopic] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    if (topic.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  const handleChange = (evt) => {
    setTopic(evt.target.value);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css["form-container"]}>
        <input
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images..."
          value={topic}
          onChange={handleChange}
          className={css["search-input"]}
        />
        <button type="submit" className={css["search-btn"]}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchForm;
