import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>
          <span className='name'>Inshorts clone made by - "Sourabh"</span>
          <hr style={{width: "90%"}} />
          <div className='icon-container'>
            <InstagramIcon />
            <LinkedInIcon />
          </div>
      </div>
    </footer>
  )
}

export default Footer
