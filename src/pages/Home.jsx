import "../css pages/Home.css"
import Contact from "./Contact";
import Projects from "./Projects";
import About from "./About";

const Home = () => {
  return (
    <>
      <br /><br /><br /><br /><br /><br /><br />
      <div className="home-page">
        <h1 id='name'>Julian Boyne</h1>
        <h3 id="title">Software Engineer</h3>
      </div>
      <About />
      <br /><br /><br />
      <Projects />
      <br /><br /><br />
      <Contact/>
    </>

  )
}

export default Home;