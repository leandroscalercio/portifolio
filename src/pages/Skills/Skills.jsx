/* eslint-disable react/no-unknown-property */
import styles from './Skills.module.css';
import cert1 from '../../assets/cert1.jpg';
import cert2 from '../../assets/cert2.jpg';
import cert3 from '../../assets/cert3.jpg';
import cert4 from '../../assets/cert4.jpg';

const Skills = () => {
  return (
    <>
      <div className={styles.container_skills}>
        <h2>Skills:</h2>

        <div className={styles.Skills}>
          <div className={styles.skill}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>HTML5</div>
              <div className={styles.skill_bar}>
                <div
                  className={styles.skill_per}
                  per="100%"
                  style={{ maxWidth: `100%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>CSS</div>
              <div className={styles.skill_bar}>
                <div
                  className={styles.skill_per}
                  per="100%"
                  style={{ maxWidth: `100%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>BootStrap</div>
              <div className={styles.skill_bar}>
                <div
                  className={styles.skill_per}
                  per="80%"
                  style={{ maxWidth: `80%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>JavaScript</div>
              <div className={styles.skill_bar}>
                <div
                  className={styles.skill_per}
                  per="90%"
                  style={{ maxWidth: `90%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>React</div>
              <div className={styles.skill_bar}>
                <div
                  className={styles.skill_per}
                  per="80%"
                  style={{ maxWidth: `80%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>Angular</div>
              <div className={styles.skill_bar}>
                <div
                  className={styles.skill_per}
                  per="70%"
                  style={{ maxWidth: `70%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>Vue</div>
              <div className={styles.skill_bar}>
                <div
                  className={styles.skill_per}
                  per="60%"
                  style={{ maxWidth: `60%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>Git</div>
              <div className={styles.skill_bar}>
                <div
                  className={styles.skill_per}
                  per="80%"
                  style={{ maxWidth: `80%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className={styles.skill}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>Jira</div>
              <div className={styles.skill_bar}>
                <div
                  className={styles.skill_per}
                  per="80%"
                  style={{ maxWidth: `80%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className={styles.skill}>
            <div className={styles.skill}>
              <div className={styles.skill_name}>Metodologias Ágeis</div>
              <div className={styles.skill_bar}>
                <div
                  className={styles.skill_per}
                  per="90%"
                  style={{ maxWidth: `90%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <h2>Certificados:</h2>

        <div className={styles.certificados}>
          <div className={styles.cert1}>
            <img src={cert1} alt="" />
          </div>
          <div className={styles.cert2}>
            <img src={cert2} alt="" />
          </div>
          <div className={styles.cert3}>
            <img src={cert3} alt="" />
          </div>
          <div className={styles.cert4}>
            <img src={cert4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
