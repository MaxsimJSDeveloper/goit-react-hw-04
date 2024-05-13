import toast from "react-hot-toast";
import { useState } from "react"; // Імпортуємо useState

const SearchForm = ({ onSearch }) => {
  const [topic, setTopic] = useState(""); // Додано стан для збереження значення пошукового запиту

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
    setTopic(evt.target.value); // Оновлюємо значення пошукового запиту при зміні введеного тексту
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={topic} // Встановлюємо значення input згідно зі станом
          onChange={handleChange} // Додаємо обробник події для оновлення стану при введенні тексту
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchForm;
