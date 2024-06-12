import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    const items = [];
    this.state = { value: '', items };
  }

  handleValue = (e) => {
    this.setState(({ value: e.target.value }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(({ value, items }) => ({ value: '', items: [...items, { value: value,  id: uniqueId() }] }));
  };

  handleRemove = (value) => (e) => {
    e.preventDefault();
    const newItems = this.state.items.filter(({ id }) => id !== value);
    this.setState({ items: newItems });
  };

  render() {
    const { value, items } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.handleSubmit}>
            <div className="me-3">
              <input type="text"
                value={value}
                required
                autoFocus
                className="form-control"
                placeholder="I am going..."
                onChange={this.handleValue} />
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        {items.map(({ value, id }) => {
          return <Item key={uniqueId()} onRemove={this.handleRemove} value={value} id={id}/>;
        })}
      </div>
    );
  }
}
