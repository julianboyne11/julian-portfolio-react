import "../css pages/About.css"


const About = () => {
  return ( 
    <>
    <div className="about-me-container">
      <h1 className="title">About Me</h1>

        <img id="me" src="./assets/yo.png" alt="Julian" /><br />
      <hr />
      <h3>I'm a full stack developer with experience in the food and beverage industry. I work well in teams by being adaptable, leading by example, motivating myself and others, and communicating effectively. When building apps, I get to exercise envisioning all possible scenarios to tackle problems that I'm solving with all projects.</h3>
      <h2>Skills</h2>
      <hr />
      <h3>HTML - CSS (Cascading Style Sheets) - JavaScript - Python - Mongoose - Reactjs - Express - Django - PostgresSQL - MongoDB - Nodejs</h3>
      <br /><br /><br />
    </div>
    </>
  )
}

export default About;