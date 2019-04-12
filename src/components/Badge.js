import React from 'react';
import './styles/Badge.css';

import confLogo from '../images/logo.svg'

class Badge extends React.Component {
  render (){
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo" />
        </div>

        <div className="badge_section-name">
          <img className="badge_avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>Ismael  <br />Jdz7</h1>
        </div>

        <div className="badge_section-info">
          <p>Fronted Developer</p>
          <p>@Ismaeljdz</p>
        </div>

        <div className="badge_footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge;
