import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      avatarUrl: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit =  async e => {
    e.preventDefault();
    this.setState({
      loading: true, error: null,
    })

    try {
      await api.badges.create(this.state.form);
      this.setState({
        loading: false,
      })

      this.props.history.push('/badges');

    } catch (error) {
      this.setState({
        loading: false,
        error: error, 
      })
    }
  }

  render() {
    if(this.state.loading) {
      return <PageLoading />  
    }

    return (
      <React.Fragment>

        <div className="BadgeNew__hero">
          <img className="BadgeNew__here-img img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'Fist name'}
                lastName={this.state.form.lastName || 'Last name'}
                twitter={this.state.form.twitter || '@'}
                jobTitle={this.state.form.jobTitle || 'Job title'}
                email={this.state.form.email || 'example@example.com'}
                //avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                avatarUrl="https://pbs.twimg.com/profile_images/1005926723093852160/IwjBWV7h_400x400.jpg"
              />
            </div>

            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
