import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
      <header className="app-header">
        <nav>
          <Link className="App-link" to="/">Julian Boyne</Link>
          <Link className="App-link" to="/about">About Me</Link>
          <Link className="App-link" to="/projects">My Work</Link>
          <Link className="App-link" to="/contact">Contact Me</Link>
        </nav>
      </header>
    )
}

export default NavBar;