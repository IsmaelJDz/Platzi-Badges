import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <img
          className="BadgesListItem__avatar"
          src={this.props.badge.avatarUrl || 'https://pbs.twimg.com/profile_images/1005926723093852160/IwjBWV7h_400x400.jpg'}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends React.Component {
  render() {
    if (this.props.listBadges.length === 0) {
      return (
        <div>
          <h3>No encontramos ningun Badge</h3>´
          <Link className="btn btn-primary" to="/badges/new">Create New Badge</Link> 
        </div>
      )
    }
    return (
      <div className="BadgesList">
          <ul className="list-unstyled">
            {this.props.listBadges.map((badge) => {
              return (
                <li key={badge.id}>
                  <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                    <BadgesListItem badge={badge} />
                  </Link>
                </li>
              )
            })}
          </ul>
      </div>
    )
  }
}

export default BadgesList;
