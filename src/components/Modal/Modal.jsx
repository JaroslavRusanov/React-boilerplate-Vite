import React from 'react';
import cn from 'classnames';

const Header = ({ children, toggle }) => (
  <div className="modal-header">
    <div className="modal-title">{children}</div>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={toggle} />
  </div>
);

const Body = ({ children }) => <div className="modal-body">{children}</div>;

const Footer = ({ children }) => <div className="modal-footer">{children}</div>;

export default class Modal extends React.Component {
  static Header = Header;

  static Body = Body;

  static Footer = Footer;

  render() {
    const { isOpen, children } = this.props;
    const classNames = cn({
      modal: true,
      fade: isOpen,
      show: isOpen,
    });

    const currentStyle = isOpen ? 'block' : 'none';
    const styles = { display: currentStyle };

    return (
      <div className={classNames} style={styles} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  }
}