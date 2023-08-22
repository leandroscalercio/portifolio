import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './Home.module.css';
import me from '../../assets/me.png';
import Uol from './Uol';
import GlobalWeb from './GlobalWeb';
import SixtyMinutes from './SixtyMinutes';
import Brb from './Brb';

const Home = () => {
  const contentStyle = {
    color: 'black',
    boxShadow: '0 3px 0 #f2bb62',
  };

  const contentArrowStyle = {
    color: '#f2bb62',
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container_info}>
          <h1>
            Olá, eu sou o <br />
            Leandro Scalercio :<span>)</span>
          </h1>
          <p>Desenvolvedor Front-End</p>
          <div className={styles.container_info_tec}>
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg" />
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" />
            <img src="https://angular.io/assets/images/logos/angular/angular.png" />
          </div>
        </div>
        <div className={styles.container_image}>
          <img src={me} alt="foto-leandro" />
        </div>
      </div>
      <VerticalTimeline lineColor="gray" layout="2-columns">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="Agosto 2023 - Até o momento."
          icon={<Uol />}
        >
          <h3 className={styles.vertical_timeline_element_title}>
            Front-End Developer - React
          </h3>
          <ul>
            <li>Atuação no time do site principal da Vivo;</li>
            <li>Desenvolvendo componentes em React e TypeScript;</li>
            <li>Implementação de tagueamento com Google analitcs;</li>
            <li>Integrações com as Api's da Vivo.</li>
          </ul>
          <div className={styles.vertical_timeline_element_competencias}>
            <h2>Competências:</h2>
            <div>
              <span>React.js</span>
              <span>TypeScript</span>
              <span>Next.js</span>
              <span>Jest</span>
              <span>GitLab</span>
              <span>JIRA</span>
              <span>StoryBook</span>
              <span>StyledComponents</span>
              <span>SASS</span>
              <span>Figma</span>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="Maio 2022 - Agosto 2023."
          icon={<Uol />}
        >
          <h3 className={styles.vertical_timeline_element_title}>
            Front-End Developer - React | AEM
          </h3>
          <ul>
            <li>Atuação no time do site principal da Porto;</li>
            <li>Desenvolvimento de componentes em React e TypeScript;</li>
            <li>Estimar com precisão o tempo de trabalho e esforço;</li>
            <li>Implementação de tagueamento com Google analitcs.</li>
            <li>
              Integração Front-end com Adobe Experience Manager (AEM)
              components;
            </li>
          </ul>
          <div className={styles.vertical_timeline_element_competencias}>
            <h2>Competências:</h2>
            <div>
              <span>React.js</span>
              <span>TypeScript</span>
              <span>Java</span>
              <span>AEM</span>
              <span>Jest</span>
              <span>GitLab</span>
              <span>JIRA</span>
              <span>StoryBook</span>
              <span>StyledComponents</span>
              <span>SASS</span>
              <span>Figma</span>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="Novembro 2021 - Maio 2022."
          icon={<Uol />}
        >
          <h3 className={styles.vertical_timeline_element_title}>
            Front-End Developer - Angular
          </h3>
          <ul>
            <li>Desenvolvimento do FrontEnd do software “PC-Factory”;</li>
            <li>
              A empresa PPI-Multitask focada em gestão de produção e chão de
              fábrica, faz parte do grupo empresarial Weg;
            </li>
            <li>Desenvolvimento componentes em Angular e TypeScript;</li>
            <li>Integrações com as Api's da PPI-Multitask.</li>
          </ul>
          <div className={styles.vertical_timeline_element_competencias}>
            <h2>Competências:</h2>
            <div>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>JQuery</span>
              <span>Jest</span>
              <span>GitLab</span>
              <span>JIRA</span>
              <span>Confluence</span>
              <span>StoryBook</span>
              <span>SASS</span>
              <span>Figma</span>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="Agosto 2021 - Novembro 2021."
          icon={<Uol />}
        >
          <h3 className={styles.vertical_timeline_element_title}>
            Front-End Developer - Mendix
          </h3>
          <ul>
            <li>Desenvolvimento de soluções utilizando a plataforma Mendix.</li>
          </ul>
          <div className={styles.vertical_timeline_element_competencias}>
            <h2>Competências:</h2>
            <div>
              <span>JavaScript</span>
              <span>Mendix</span>
              <span>JAVA</span>
              <span>Scrum</span>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          date="Inicio da Jornada!"
          icon={<Uol />}
        ></VerticalTimelineElement>

        <VerticalTimelineElement
          date="Fim  da Jornada!"
          icon={<GlobalWeb />}
        ></VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="Fevereiro 2021 - Agosto 2021."
          icon={<GlobalWeb />}
        >
          <h3 className={styles.vertical_timeline_element_title}>
            Front-End Developer - Angular
          </h3>
          <ul>
            <li>Desenvolvimento de compoenentes em Angular;</li>
            <li>Integração com o sistema do Banco BRB.</li>
            <li>Correção de Bugs </li>
            <li>Sustentação </li>
          </ul>
          <div className={styles.vertical_timeline_element_competencias}>
            <h2>Competências:</h2>
            <div>
              <span>JavaScript</span>
              <span>Angular</span>
              <span>JAVA</span>
              <span>Scrum</span>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Início da Jornada!"
          icon={<GlobalWeb />}
        ></VerticalTimelineElement>

        <VerticalTimelineElement
          date="Fim  da Jornada!"
          icon={<SixtyMinutes />}
        ></VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="Março 2020 - Outtubro 2020."
          icon={<SixtyMinutes />}
        >
          <h3 className={styles.vertical_timeline_element_title}>
            Front-End Developer - WordPress
          </h3>
          <ul>
            <li>Desenvolvimento de telas;</li>
            <li>Manutenção e Fluidez do site;</li>
          </ul>
          <div className={styles.vertical_timeline_element_competencias}>
            <h2>Competências:</h2>
            <div>
              <span>JavaScript</span>
              <span>WordPress</span>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Início da Jornada!"
          icon={<SixtyMinutes />}
        ></VerticalTimelineElement>

        <VerticalTimelineElement
          date="Fim da Jornada!"
          icon={<Brb />}
        ></VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={contentStyle}
          contentArrowStyle={contentArrowStyle}
          date="Setembro 2019 - Março 2020."
          icon={<Brb />}
        >
          <h3 className={styles.vertical_timeline_element_title}>Estagiário</h3>
          <ul>
            <li>Atuei na Diretoria de Tecnologia;</li>
            <li>Sustentação de Incidentes;</li>
            <li>Atualização e manutenção do site do Banco.</li>
          </ul>
          <div className={styles.vertical_timeline_element_competencias}>
            <h2>Competências:</h2>
            <div>
              <span>PHP</span>
              <span>JAVA</span>
              <span>JavaSCript</span>
              <span>MySql</span>
              <span>WordPress</span>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          date="Início da Jornada!"
          icon={<Brb />}
        ></VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Home;
