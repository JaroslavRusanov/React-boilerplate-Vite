// Add log with up/down count and remove for click

import uniqueId from 'lodash/uniqueId';
import React from 'react';

export default class Log extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      prevCount: 0,
      items: [],
      idCounter: 0,
    };
  }

  handlePlus = () => {
    this.setState(({ count, items, idCounter }) => (
		  { count: count + 1,
        prevCount: count,
				items: [{ name: count + 1, id: idCounter }, ...items],
				idCounter: idCounter + 1,
		}));
  };

  handleMinus = () => {
    this.setState(({ count, items, idCounter }) => (
			{ count: count - 1,
        prevCount: count,
				items: [{ name: count - 1, id: idCounter }, ...items],
				idCounter: idCounter + 1,
			}
			));
  };

  removeItem = (id) => (e) => {
    e.preventDefault();
    const newItems = this.state.items.filter((item) => item.id !== id);
    this.setState(({ prevCount }) => ({ count: prevCount, items: newItems }));
  };

  renderLogs() {
    if (this.state.items.length === 0) {
      return;
    }
    const { items } = this.state;
    const logs = items.map((item) => (<button key={uniqueId()} onClick={this.removeItem(item.id)} type="button" className="list-group-item list-group-item-action">{item.name}</button>));
    return (
      <div className="list-group">
        {logs}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button type="button" className="btn btn-outline-success" onClick={this.handlePlus}>+</button>
          <button type="button" className="btn btn-outline-danger" onClick={this.handleMinus}>-</button>
        </div>
        {this.renderLogs()}
      </div>
    );
  }
}