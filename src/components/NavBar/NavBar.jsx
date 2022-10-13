import { Link } from "react-router-dom";

function NavBar() {
    return (
      <header className="App-header">
        <nav>
          <Link className="App-link" to="/">Julian Boyne</Link>
          <Link className="App-link" to="/about">About Me</Link>
          <Link className="App-link" to="/contact">Contact Me</Link>
          <Link className="App-link" to="/projects">My Work</Link>
        </nav>
      </header>
    )
}

export default NavBar;