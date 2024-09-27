import { useState } from "react";
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
  const [imageSrc, setImageSrc] = useState<string>(poster);

  const handleImageError = () => {
    setImageSrc(bannerMockIcon);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageContainer}>
        <img
          className={styles.mockedBanner}
          src={imageSrc}
          alt="banner"
          onError={handleImageError}
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
