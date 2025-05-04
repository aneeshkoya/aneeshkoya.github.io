import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogleScholar } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/aneeshkoya" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/aneeshmoideenkoya/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://scholar.google.com/citations?user=1R0nFwcAAAAJ&hl=en&oi=ao" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGoogleScholar} size="2x"/></a>
      </div>
          </footer>
  );
}

export default Footer;