import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg'
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'

class BadgeNew extends React.Component {
  render () {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge fisrtName="Ismael" lastName="JDz7" twitter="@ismaeljdz" jobTitle="Fronted Developer" avatarUrl="https://pbs.twimg.com/profile_images/1060335931285155840/KJGxOezp_400x400.jpg"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BadgeNew;
