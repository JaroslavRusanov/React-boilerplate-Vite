// let autocomplete input with data from HTTP server
import axios from 'axios';
import React from 'react';

const List = ({ countries }) => (countries.length === 0 ? null : (
  <ul>
    {countries.map((country) => (<li key={country}>{country}</li>))}
  </ul>
));

export default class Autocomplete extends React.Component {
  static List = List;

  constructor(props) {
    super(props);
    this.state = { value: '', countries: [] };
  }

  handler = async (event) => {
    const currentValue = event.target.value;
    if (currentValue === '') {
      this.setState({ value: currentValue, countries: [] });
    } else {
      const res = await axios.get('/countries', { params: { term: currentValue } });
      console.log(res);
      this.setState({ value: currentValue, countries: res.data });
    }
  };

  render() {
    const { value, countries } = this.state;
    return (
      <div>
        <form>
          <input type="text" className="form-control" placeholder="Enter Country" onChange={this.handler} value={value} />
        </form>
        <List countries={countries} />
      </div>
    );
  }
}
// END
