import "../css pages/Home.css"
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";
import Resume from "./Resume";

const Home = () => {
  return (
    <>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="home-page">
          <h1 id='name'>Julian Boyne</h1>
          <h3 id="title">Software Engineer</h3>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <About />
      <br /><br /><br />
      <Projects />
      <br /><br /><br />
      <Contact/>
      <br /><br />
      <Resume/>
    </>

  )
}

export default Home;