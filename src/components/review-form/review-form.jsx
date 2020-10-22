import React, {PureComponent} from "react";
import {Stars} from "../../const";

class ReviewForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      review: ``,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    const {name, value} = evt.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const ratingButton = Object.entries(Stars).reverse().map((star) => {
      return (
        <React.Fragment key={star}>
          <input className="form__rating-input visually-hidden" name="rating" value={star[0]} id={star[1]} type="radio" />
          <label htmlFor={star[1]} className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use href="#icon-star"></use>
            </svg>
          </label>
        </React.Fragment>
      );
    });

    return (
      <form className="reviews__form form" action="#" method="post" onChange = {this.handleInputChange}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratingButton}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}

export default ReviewForm;
