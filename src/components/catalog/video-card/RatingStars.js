import React from 'react';

const RatingStars = (props) => {

  //ratings are out of 10, divide by 2 to get 5 star limit, divide the Math.round to get any half stars
  const roundedRating = Math.round((props.rating/2)*2)/2;
  const roundedDown = Math.floor(roundedRating);
  const roundedUp = Math.ceil(roundedRating);
  let stars = [];

  for (let i = 0; i < roundedDown; i++) {
    stars.push(<span className="material-icons star star--full" key={`whole-${i}`}>star</span>)
  }
  if(roundedRating - roundedDown === .5) {
    stars.push(<span className="material-icons star star--half" key='half'>star_half</span>)
  }
  for (let i = 0; i < 5 - roundedUp; i++) {
    stars.push(<span className="material-icons star star--empty" key={`border-${i}`}>star_border</span>)
  }

  return (
    <div>
      {stars}
    </div>
  )
};

export default RatingStars;