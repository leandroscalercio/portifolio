import styles from './NotFound.module.css';
import notfound from '../../assets/404.svg';
const NotFound = () => {
  return (
    <>
      <div className={styles.notfound}>
        <img src={notfound} alt="" />
      </div>
      <h2>Ops... Página não encontrada!</h2>
    </>
  );
};

export default NotFound;
