import React from 'react';
import './styles/Badge.css';

import confLogo from '../images/logo.svg'
import Gravatar from './Gravatar';

class Badge extends React.Component {
  render (){
    return (
      <div className="badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo" />
        </div>

        <div className="badge_section-name">
          <Gravatar 
            className="badge_avatar" 
            email={this.props.email} 
            alt="Avatar" 
          />
          <h1>{this.props.firstName}  <br />{this.props.lastName}</h1>
        </div>

        <div className="badge_section-info">
          <p>{this.props.jobTitle}</p>
          <p>{this.props.twitter}</p>
        </div>

        <div className="badge_footer">
          #platziconf
        </div>
      </div>
    )
  }
}

export default Badge;
