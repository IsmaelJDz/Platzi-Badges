import React from 'react';

class BadgeForm extends React.Component {

  // state = {
  //   // firstName: '',
  //   // lastName: '',
  //   // email: '',
  //   // jobTitle: '',
  //   // twitter: ''
  // }

  // handleChange = e => {
  //   // console.log({
  //   //  value: e.target.value,
  //   //  name: e.target.name
  //   // })
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  handleClick = e => {
    console.log("click")
  }

  // handleSubmit = e => {
  //   e.preventDefault()
  //   console.log("Form")
  //   console.log(this.state)
  // }


  render () {
    return (
      <div>

        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="email"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job title</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="twitter"
              value={this.props.formValues.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">Send</button>
          {this.props.error && (
            <p className="text-danger">{this.props.error.message}</p>
          )}
        </form>
      </div>
    )
  }
}

export default BadgeForm;
