import { Link } from 'react-router-dom';
import './FlowerCard.scss';

export const FlowerCard = () => {
  return (
    <div className="flowerCard">
      <a className="flowerCard__heartLink" href="#">
        <img src="/src/images/heart.svg" className="flowerCard__img"></img>
      </a>
      <Link to="/PlantPage" className="flowerCard__link">
        <img src="/src/images/imageCard.png" className="flowerCard__img"></img>
        <p className="flowerCard__title">Monstera delicacy</p>
        <p className="flowerCard__descr">
          A stylish plant with large, dissected leaves. Unpretentious, grows
          well in partial shade. Purifies the air.
        </p>
      </Link>
    </div>
  );
};
