import './about.scss';
import papa from '../hero/cv papa -.png';

const About = () => {
  return (
    <div className="section">
      <div className="hero">
        <article>
          <img src={papa} alt="Pape Ibrahima Nguer" />
          <p>
            I am a passionate and skilled frontend web developer with strong expertise in creating dynamic and responsive web applications. Specializing in modern web technologies, I leverage the power of JavaScript, React JS, HTML, CSS, and SASS to build seamless user experiences and visually appealing interfaces.
          </p>
          <p>
            With a deep understanding of the core principles of web development, I excel in writing clean, efficient, and maintainable code. My proficiency in JavaScript allows me to implement complex functionalities and ensure robust client-side performance. My expertise in React JS enables me to create single-page applications (SPAs) that are both interactive and efficient, utilizing the virtual DOM for optimal rendering.
          </p>
          <p>
            My skill set includes a strong command of Redux for state management, ensuring that application state is predictable and easy to debug. I am adept at using JSON for data interchange, making seamless integrations with APIs and backend services. My knowledge of HTML and CSS/SASS ensures that my web applications are not only functional but also adhere to modern design standards and best practices.
          </p>
        </article>
      </div>
    </div>
  );
}

export default About;
