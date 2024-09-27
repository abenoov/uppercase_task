import { useState } from "react";

import searchIcon from "../../assets/icon/searchIcon.svg";

import styles from "./search.module.css";

interface SearchProps {
  onSearch: (value: string) => void;
  defaultValue: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, defaultValue }) => {
  const [searchTerm, setSearchTerm] = useState<string>(defaultValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.inputContainer}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        required
      />
      <img src={searchIcon} alt="searchIcon" />
    </div>
  );
};

export default Search;
