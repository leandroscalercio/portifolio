import styles from './Projects.module.css';
import construction from '../../assets/construction.svg';

const Projects = () => {
  return (
    <>
      <div className={styles.construction_container}>
        <img src={construction} alt="" />
      </div>
      <h2>Em construção...</h2>
    </>
  );
};

export default Projects;
