import { useState } from "react";
import Card from "../../components/Card/Card";
import { useMediaContent } from "../../hooks/useMediaContent";
import Layout from "../../layout/Layout/Layout";
import Header from "../../layout/Header/Header";

import styles from "./homePage.module.css";

const HomePage = () => {
  const [contentName, setContentName] = useState<string>("Batman");
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { data, error, isLoading } = useMediaContent(contentName, pageNumber);

  const handleSearchChange = (value: string) => {
    setContentName(value);
  };

  return (
    <Layout>
      <Header onSearch={handleSearchChange} defaultValue={contentName} />{" "}
      <div className={styles.searchResultsTitle}>
        <h2>You searched for: {contentName}</h2>
        {!isLoading && (
          <span>{data?.Search ? data?.totalResults : 0} results</span>
        )}
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.searchResultsContainer}>
          {data?.Search?.map((item) => (
            <Card
              key={item.imdbID}
              imdbID={item.imdbID}
              name={item.Title}
              year={item.Year}
              type={item.Type}
              poster={item.Poster}
            />
          ))}
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
