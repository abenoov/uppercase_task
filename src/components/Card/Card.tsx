import bannerMockIcon from "../../assets/icon/bannerMockIcon.svg";

import styles from "./card.module.css";

interface CardProps {
  name: string;
  year: string;
  imdbID: string;
  type: string;
  poster: string;
}

const Card: React.FC<CardProps> = ({ name, year, imdbID, type, poster }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <img
          className={styles.mockedBanner}
          src={poster ? poster : bannerMockIcon}
          alt="banner"
        />
      </div>
      <div className={styles.cardDescription}>
        <span>Name: {name}</span>
        <span>Year: {year}</span>
        <span>imdbID: {imdbID}</span>
        <span>Type: {type}</span>
      </div>
    </div>
  );
};

export default Card;
