import React from 'react';
import './styles/Badge.css';

import confLogo from '../images/logo.svg'

class Badge extends React.Component {
  render (){
    return (
      <div className="badge">
        <div>
          <img src={confLogo} alt="Logo" />
        </div>

        <div>
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>Ismael  <br />Jdz7</h1>
        </div>

        <div>
          <p>Fronted Developer</p>
          <p>@Ismaeljdz</p>
        </div>

        <div>
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge;
