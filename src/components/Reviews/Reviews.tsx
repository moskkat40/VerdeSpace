import './Reviews.scss';
import '../HomePage/HomePage.scss';
import { ReviewsSlider } from '../ReviewsSlider/ReviewsSlider';
import { Comment } from '../Comment/Comment';
import { useState } from 'react';
import { NewCommentModal } from '../NewCommentModal/NewCommentModal';

export const Reviews = () => {
  const [commentModal, setCommentModal] = useState(false);

  function openCommentModal() {
    if (!commentModal) {
      setCommentModal(true);
    } else {
      setCommentModal(false);
    }
  }

  function closeCommentModal() {
    setCommentModal(false);
  }

  return (
    <>
      <div className="reviews">
        <div className="homePage__text">
          <h2 className="homePage__textTitle">Reviews</h2>
          <span className="homePage__textLine"></span>
        </div>
      </div>
      <ReviewsSlider />
      <button onClick={openCommentModal} className="reviews__button">
        Leave a review
      </button>
      <Comment />
      <Comment />
      <Comment />
      <a className="reviews__seeMore" href="#">
        See more
      </a>

      {commentModal && (
        <NewCommentModal closeCommentModal={closeCommentModal} />
      )}
    </>
  );
};
