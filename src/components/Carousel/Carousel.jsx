import React from 'react';
import cn from 'classnames';

const images = ['/images/first.jpeg', '/images/second.jpeg', '/images/third.jpeg'];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    const quantityItems = this.props.images.length - 1;
    this.state = { activePosition: 0, quantityItems: quantityItems };
  }

  handlePrevClick = () => {
    this.setState((state) => {
      const { activePosition, quantityItems } = state;
      if (activePosition === 0) {
        return { activePosition: quantityItems }
      }
      return { activePosition: activePosition - 1 };
    })
  }

  handleNextClick = () => {
    this.setState((state) => {
      const { activePosition, quantityItems } = state;
      if (activePosition >= quantityItems) {
        return { activePosition: 0}
      }
      return { activePosition: activePosition + 1 };
    })
  }

  render() {
    const { images } = this.props;

    const carouselItem = images.map((image, i) => {
      const classNamesItem = cn('carousel-item', { active:  i === this.state.activePosition })
      return (
        <div key={i} className={classNamesItem}>
          <img alt="" className="d-block w-100" src={image} />
        </div>
      );
    })

    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {carouselItem}
        </div>
        <button className="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev" onClick={this.handlePrevClick}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" onClick={this.handleNextClick}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span  className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

