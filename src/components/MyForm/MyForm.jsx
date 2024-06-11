import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/styles.scss';


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: 'filling',
      email: '',
      password: '',
      address: '',
      city: '',
      country: '',
      acceptRules: false,
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ formState: 'filled' });
  }

  handleChangeRules = () => this.setState({ acceptRules: true });

  handleClick = () => this.setState({ formState: 'filling' });

  render() {
    const {
      formState,
      email,
      password,
      address,
      city,
      country,
      acceptRules,
    } = this.state;

    const form = (
      <form name="myForm" onSubmit={this.handleSubmit} >
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">Email</label>
          <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={this.handleChange} value={email} />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="password" className="col-form-label">Password</label>
          <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} value={password} />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">Address</label>
          <textarea type="text" className="form-control" name="address" id="address" placeholder="1234 Main St" onChange={this.handleChange} value={address} />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">City</label>
          <input type="text" className="form-control" name="city" id="city" onChange={this.handleChange} value={city} />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">Country</label>
          <select id="country" name="country" className="form-control" onChange={this.handleChange} value={country}>
            <option value="">Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
            <input id="rules" type="checkbox" name="acceptRules" className="form-check-input" onChange={this.handleChangeRules} checked={acceptRules} />
                Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );

    const table = (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.handleClick}>Back</button>
        <table className="table">
          <tbody>
            <tr>
              <td>acceptRules</td>
              <td>{acceptRules.toString()}</td>
            </tr>
            <tr>
              <td>address</td>
              <td>{address}</td>
            </tr>
            <tr>
              <td>city</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>country</td>
              <td>{country}</td>
            </tr>
            <tr>
              <td>email</td>
              <td>{email}</td>
            </tr>
            <tr>
              <td>password</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
    return formState === 'filling' ? form : table;
  }
}

ReactDOM.createRoot(document.getElementById('container')).render(
  <React.StrictMode>
    <MyForm />
  </React.StrictMode>,
)