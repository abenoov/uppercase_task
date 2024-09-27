import React from "react";

import arrowLeftIcon from "../../assets/icon/arrowLeftcon.svg";
import arrowRightIcon from "../../assets/icon/arrowRightIcon.svg";

import styles from "./pagination.module.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages === 0) {
    return (
      <div className={styles.pagination}>
        <button
          className={`${styles.pageButton} ${styles.activePage}`}
          disabled
        >
          1
        </button>
      </div>
    );
  }

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(currentPage + 1, totalPages - 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrowButton}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <img src={arrowLeftIcon} alt="arrowLeftIcon" />
      </button>
      {generatePageNumbers().map((page, index) => (
        <button
          key={index}
          className={`${styles.pageButton} ${
            page === currentPage ? styles.activePage : ""
          }`}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={typeof page !== "number"}
        >
          {page}
        </button>
      ))}
      <button
        className={styles.arrowButton}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <img src={arrowRightIcon} alt="arrowRightIcon" />
      </button>
    </div>
  );
};

export default Pagination;
