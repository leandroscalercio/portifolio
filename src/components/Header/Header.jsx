import styles from './Header.module.css';
import logo from '../../assets/logo.png';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <img src={logo} alt="logo-site" />
        <NavBar />
      </div>
    </>
  );
};

export default Header;
