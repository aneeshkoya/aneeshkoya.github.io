import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import mock02 from '../assets/images/mock02.png';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={mock02} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/aneeshkoya" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aneeshmoideenkoya/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://scholar.google.com/citations?user=1R0nFwcAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGoogleScholar} size="3x"/></a>
          </div>
          <h1>Aneesh M Koya</h1>
          <p>Research Scientist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/aneeshkoya" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/aneeshmoideenkoya/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://scholar.google.com/citations?user=1R0nFwcAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGoogleScholar} size="3x"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;