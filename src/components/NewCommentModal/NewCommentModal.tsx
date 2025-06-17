import './NewCommentModal.scss';
import '../Comment/Comment.scss';

type Props = {
  closeCommentModal: () => boolean;
};

export const NewCommentModal: React.FC<Props> = ({ closeCommentModal }) => {
  return (
    <>
      <div className="overlay">
        <div className="newCommentModal">
          <button
            onClick={closeCommentModal}
            className="newCommentModal__close"
          >
            ×
          </button>
          <div className="newCommentModal__title">Name of Plant</div>
          <div className="newCommentModal__subtitle">Your rating</div>
          <div className="newCommentModal__stars">
            <span className="newCommentModal__star">★</span>
            <span className="newCommentModal__star">★</span>
            <span className="newCommentModal__star">★</span>
            <span className="newCommentModal__star">★</span>
            <span className="newCommentModal__star">★</span>
          </div>
          <textarea
            placeholder="Leave your feedback about the plant"
            className="newCommentModal__text"
          />
          <div className="newCommentModal__links">
            <a href="#" className="newCommentModal__uploadPhoto">
              Upload photo
            </a>
            <button className="newCommentModal__button">Leave a review</button>
          </div>
        </div>
      </div>
    </>
  );
};
