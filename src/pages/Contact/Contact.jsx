import styles from './Contact.module.css';
import git from '../../assets/github-logo.svg';
import linkedin from '../../assets/linkedin-logo.svg';
import email from '../../assets/email.svg';

const Contact = () => {
  return (
    <>
      <div className={styles.form_container}>
        <a href="https://github.com/leandroscalercio" target="blank">
          <img src={git} alt="link-git" />
        </a>
        <a
          href="https://www.linkedin.com/in/leandro-scalercio-moreira-74874a120/"
          target="blank"
        >
          <img src={linkedin} alt="link-linkedin" />
        </a>
        <a href="mailto:leandroscalercio@gmail.com">
          <img src={email} alt="link-email" />
        </a>
      </div>
    </>
  );
};

export default Contact;
