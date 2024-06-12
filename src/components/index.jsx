import React from 'react';
import cn from 'classnames';
import '../scss/styles.scss'
import MyForm from './MyForm/MyForm.jsx';
import Carousel from './Carousel/Carousel.jsx';
import TodoList from './TodoList/TodoBox.jsx';
import Modal from './Modal/Component.jsx';
import Logger from './Logger/Logger.jsx';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    const { components, activeComponent } = this.props;
    this.state = { components, activeComponent };
  }

  handleClick = (e) => {
    e.preventDefault();
    const currentValue = e.target.name;
    this.setState({ activeComponent: currentValue })
  }

  render () {
    const { components, activeComponent } = this.state;

    const mappingComponents = () => {
      switch(activeComponent) {
        case 'MyForm':
          return <MyForm />;
        case 'Carousel':
          return <Carousel />;
        case 'TodoList':
          return <TodoList />;
        case 'Logger':
          return <Logger />;
        case 'Modal':
          return <Modal />;
        default:
          throw new Error('unknown react component');
      }
    };

    return (
      <div className="m-3">
        <nav className="nav nav-pills">
          {components.map((name , i) => {
            const classNames = cn('nav-link', { active: activeComponent === name });
            return (
                <li key={i} className="nav-item">
                  <a href="#" className={classNames} name={name} onClick={this.handleClick}>{name}</a>
                </li>
                );
            })
          }
        </nav>
        <div className="m-3">
          {mappingComponents()}
        </div>
        
      </div>
    );
  }
}

Index.defaultProps = {
  components: [
    'MyForm',
    'Carousel',
    'TodoList',
    'Logger',
    'Modal',
  ], 
  activeComponent: 'MyForm',
}