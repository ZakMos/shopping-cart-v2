import React, { Component } from "react";

class Footer extends Component {
  render() {
  return (
    <footer className="main-footer">
      <h3 className="band-name">&copy; 2021 Zakaria Moslim </h3>
        <div className="contact">
          <a href="https://github.com/ZakMos" target="_blank" rel="noopener noreferrer">
            <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/24/github-icon.png" alt="github"/>
          </a>
          <a href="https://zakmos.github.io" target="_blank" rel="noopener noreferrer">
            <img src="http://icons.iconarchive.com/icons/social-media-icons/glossy-social/24/Website-icon.png" alt="website"/>
            </a>
            <a href="https://de.linkedin.com/in/zakmos" target="_blank" rel="noopener noreferrer">
            <img src="http://icons.iconarchive.com/icons/martz90/circle/24/linkedin-icon.png" alt="linkedin"/>
            </a>
            <a href="mailto:z.zza@hotmail.com" target="_blank" rel="noopener noreferrer">
            <img src="http://icons.iconarchive.com/icons/graphicloads/100-flat/24/email-2-icon.png" alt="EMail" />
            </a>
        </div>
    </footer>
    )
  }
}

export default Footer;
