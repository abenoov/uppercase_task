import uppercaseLogo from "../../assets/uppercaseLogo.png";
import userIcon from "../../assets/icon/userIcon.svg";
import Search from "../../components/Search/Search";
import styles from "./header.module.css";

interface HeaderProps {
  onSearch: (value: string) => void;
  defaultValue: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, defaultValue }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <img width="208px" height="52px" src={uppercaseLogo} alt="logo" />
        <Search onSearch={onSearch} defaultValue={defaultValue} />{" "}
        <div className={styles.userContainer}>
          <img src={userIcon} alt="userIcon" />
          <span>Mukhtar Abenov</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
