import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.nav_menu}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projetos</NavLink>
        <NavLink to="/contact">Contato</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
