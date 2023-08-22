/* eslint-disable react/no-unknown-property */
import styles from './Certificados.module.css';
import origamid1 from '../../assets/certificados/origamid/cert1.jpg';
import origamid2 from '../../assets/certificados/origamid/cert2.jpg';
import origamid3 from '../../assets/certificados/origamid/cert3.jpg';
import origamid4 from '../../assets/certificados/origamid/cert4.jpg';
import faculdade from '../../assets/certificados/faculdade/cert-projecao.jpg';
import { useState } from 'react';
const Certificados = () => {
  const [activeTab, setActiveTab] = useState('projecao');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const renderContent = () => {
    if (activeTab === 'origamid') {
      return (
        <div className={styles.container_certificados}>
          <img src={origamid1} alt="" />
          <img src={origamid2} alt="" />
          <img src={origamid3} alt="" />
          <img src={origamid4} alt="" />
        </div>
      );
    } else if (activeTab === 'alura') {
      return (
        <div className={styles.container_certificados}>
          <img src={origamid1} alt="" />
        </div>
      );
    } else if (activeTab === 'udemy') {
      return (
        <div className={styles.container_certificados}>
          <img src={origamid1} alt="" />
          <img src={origamid4} alt="" />
        </div>
      );
    } else if (activeTab === 'projecao') {
      return (
        <div className={styles.container_certificados_projecao}>
          <img src={faculdade} alt="" />
        </div>
      );
    }
  };

  return (
    <>
      <div className={styles.container}>
        <nav className={styles.sidenav}>
          <button onClick={() => handleTabClick('projecao')}>Projeção</button>
          <button onClick={() => handleTabClick('origamid')}>Origamid</button>
          <button onClick={() => handleTabClick('alura')}>Alura</button>
          <button onClick={() => handleTabClick('udemy')}>Udemy</button>
        </nav>
        <div>
          <div>{renderContent()}</div>
        </div>
      </div>
    </>
  );
};

export default Certificados;
