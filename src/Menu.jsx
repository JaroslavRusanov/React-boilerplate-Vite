import React from 'react';

export default class Menu extends React.Component {
  render () {
    const { names } = this.props;
    return (
      <div className="container">
        <h4 className="h4">Components</h4>
        <ul className="list-group">
          {names.map(({ name, src }, i) => <li key={i} className="list-group-item"><a href={src}>{name}</a></li>)}
        </ul>
      </div>
    );
  }
}