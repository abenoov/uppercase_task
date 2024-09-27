import bannerMockIcon from "../../assets/icon/bannerMockIcon.svg";

import styles from "./card.module.css";

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <img
          className={styles.mockedBanner}
          src={bannerMockIcon}
          alt="banner"
        />
      </div>
      <div className={styles.cardDescription}>
        <span>Name: Batman</span>
        <span>Year: 1996</span>
        <span>imdbID: 2344j</span>
        <span>Type: Movie</span>
      </div>
    </div>
  );
};

export default Card;
