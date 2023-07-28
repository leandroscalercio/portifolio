import styles from './About.module.css';
import me2 from '../../assets/me2.png';

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_about}>
          <h2>Sobre mim:</h2>
          <p>
            {' '}
            Formado em <span>Análise e Desenvolvolvimento de Sistemas</span>
            {''} no ano de <span>2021</span> pela faculdade {''}
            <span>
              <a href="https://projecao.br/faculdade" target="blank">
                UniProjeção
              </a>
            </span>
            .
          </p>
          Natural do <span>Rio de Janeiro</span>, morando a 10 anos em Brasília.
          <p>
            <span>Flamenguista</span> e <span>Pai</span> de uma linda princesa.
          </p>
          <p>
            Trabalhando como <span>Desenvolvedor Front-end</span> desde de
            agosto de 2021 na{' '}
            <span>
              <a href="https://compass.uol/" target="blank">
                CompassUOL
              </a>
            </span>
            .
          </p>
        </div>
        <div className={styles.container_image}>
          <img src={me2} alt="leandro-formatura" />
        </div>
      </div>
    </>
  );
};

export default About;
