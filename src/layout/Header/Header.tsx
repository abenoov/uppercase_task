import uppercaseLogo from "../../assets/uppercaseLogo.png";
import userIcon from "../../assets/icon/userIcon.svg";

import Search from "../../components/Search/Search";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img width="208px" height="52px" src={uppercaseLogo} alt="logo" />
        <Search />
        <div className={styles.userContainer}>
          <img src={userIcon} alt="userIcon" />
          <span>Mukhtar Abenov</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
