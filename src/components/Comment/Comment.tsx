import './Comment.scss';

export const Comment = () => {
  return (
    <div className="comment">
      <div className="comment__nickname">Nickname</div>
      <div className="comment__stars">
        <span className="comment__star">★</span>
        <span className="comment__star">★</span>
        <span className="comment__star">★</span>
        <span className="comment__star">★</span>
        <span className="comment__star">★</span>
      </div>
      <img
        className="comment__photo"
        src="/src/images/reviewsSlider1.png"
        alt=""
      />
      <div className="comment__text">
        Ficus Elastica is love at first sight! The leaves look so aesthetically
        pleasing, as if they were varnished. The plant is unpretentious, ideal
        for busy people.
      </div>
    </div>
  );
};
