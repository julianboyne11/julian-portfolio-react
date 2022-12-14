import "../css pages/Contact.css"

const Contact = () => {
  return ( 
    <div className="contact">
      <h2>Reach out if you want to work with me! You can contact me via:</h2>
      <div>
      <a href="https://github.com/julianboyne11"><img className="icon" id="github"  src="./assets/GitHub-Mark-Light-64px.png" alt="GitHub" /></a>
      <a href="https://www.linkedin.com/in/julian-boyne/" ><img className="icon"  src="./assets/linkedin.svg" alt="Linkedin" /></a>
      <a href="mailto:julianboyne11@gmail.com"><img className="icon" src="./assets/mail.svg" alt="" /></a>
      </div>
    </div>
  );
}

export default Contact;