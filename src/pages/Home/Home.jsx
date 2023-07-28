import styles from './Home.module.css';
import me from '../../assets/me.png';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_info}>
          <h1>
            Olá, eu sou o <br />
            Leandro Scalercio :<span>)</span>
          </h1>
          <p>Desenvolvedor Front-End</p>
          <div className={styles.container_button}>
            <button>Download CV</button>
            <button>Entrar em contato</button>
          </div>
        </div>
        <div className={styles.container_image}>
          <img src={me} alt="foto-leandro" />
        </div>
      </div>
    </>
  );
};

export default Home;
