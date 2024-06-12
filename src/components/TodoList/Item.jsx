import React from 'react';

export default class Item extends React.Component {
  render() {
    const { value, onRemove, id } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-auto">
            <button type="button" className="btn btn-primary btn-sm" onClick={onRemove(id)}>-</button>
          </div>
          <div className="col">{value}</div>
        </div>
        <hr />
      </div>
    );
  }
}