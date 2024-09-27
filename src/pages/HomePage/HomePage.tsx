import { useState } from "react";

import { useMediaContent } from "../../hooks/useMediaContent";

import Card from "../../components/Card/Card";
import Layout from "../../layout/Layout/Layout";
import Header from "../../layout/Header/Header";
import Pagination from "../../components/Pagination/Pagination";

import styles from "./homePage.module.css";

const HomePage = () => {
  const [contentName, setContentName] = useState<string>("Batman");
  const [pageNumber, setPageNumber] = useState<number>(1);

  const { data, error, isLoading } = useMediaContent(contentName, pageNumber);

  console.error(error);

  const handleSearchChange = (value: string) => {
    setContentName(value);
    setPageNumber(1);
  };

  const handlePageChange = (page: number) => {
    setPageNumber(page);
  };

  const totalResults = Number(data?.totalResults) || 0;
  const totalPages = totalResults > 0 ? Math.ceil(totalResults / 10) : 0;

  return (
    <Layout>
      <Header onSearch={handleSearchChange} defaultValue={contentName} />
      <div className={styles.searchResultsTitle}>
        <h2>You searched for: {contentName}</h2>
        <span>{isLoading ? 0 : totalResults} results</span>
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
      <Pagination
        currentPage={pageNumber}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
};

export default HomePage;
