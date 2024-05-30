import React, { useState } from "react";
import "../css/Resume.css";
export const Resume = ({ resumeUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleDownload = () => {
    // Simulate download behavior. You might use a library for actual download.
    window.open(resumeUrl, "_blank");
  };

  const closeResume = () => {
    setIsOpen(false);
  };

  return (
    <div className="About-header">
      <h2>Resume</h2>
      {isOpen ? (
        <div className="resume-content">
          {/* Embed your resume content here, potentially using an iframe */}
          <iframe src={resumeUrl} title="Resume"></iframe>
          <button  className="ac_btn btn text-white" style={{border:"2px solid white",width:"10rem",marginLeft:"4rem"}} onClick={closeResume}>Close Resume</button>
        </div>
      ) : (
        <div className="resume-buttons">
          <button className="ac_btn btn text-white" style={{border:"2px solid white",width:"10rem",marginLeft:"4rem"}} onClick={handleOpen}>Open Resume</button>
          <button className="ac_btn btn text-white" style={{border:"2px solid white",width:"10rem",marginLeft:"4rem"}} onClick={handleDownload}>Download Resume</button>
        </div>
      )}
    </div>
  );
};
