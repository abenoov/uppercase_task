import searchIcon from "../../assets/icon/searchIcon.svg";

import styles from "./search.module.css";

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.inputContainer}
        type="text"
        placeholder="Search..."
        required
      />

      <img src={searchIcon} alt="searchIcon" />
    </div>
  );
};

export default Search;
