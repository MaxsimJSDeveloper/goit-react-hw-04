import { Audio } from "react-loader-spinner";
import css from "./loader.module.css";

const Loader = () => (
  <div className={css.loaderContainer}>
    <Audio type="TailSpin" color="#00BFFF" height={100} width={100} />
    <p>Loading data, please wait...</p>
  </div>
);

export default Loader;
