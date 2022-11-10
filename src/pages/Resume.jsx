import React from "react";


const Resume = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Julian Boyne - ATS Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Julian Boyne - Resume.pdf';
            alink.click();
        })
    })
  }
  return ( 
    <div className="resume-container">
      <button className="resume" onClick={onButtonClick}>Download Resume</button>
    </div>
  )
}

export default Resume;