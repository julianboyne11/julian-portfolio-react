import "../css pages/About.css"

const About = () => {
  return ( 
    <div className="about-me-container">
      <h1>About Me</h1>
      <div className="img">
        <img id="me" src="./assets/yo.png" alt="Julian" /><br />
      </div>
      <hr />
      <h3>A food and beverage service provider that turned around to a full stack developer. Who works great in teams by being the example and motivating not only myself but the whole crew along with communicating effectively and adapting to any type of situation.</h3>
    </div>
  );
}

export default About;