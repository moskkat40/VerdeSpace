import { PlantPageSlider } from '../PlantPageSlider/PlantPageSlider';
import { Reviews } from '../Reviews/Reviews';
import './PlantInfo.scss';

export const PlantInfo = () => {
  return (
    <>
      <div className="plantInfo">
        <div className="plantInfo__wrapper">
          <div className="plantInfo__imgs">
            <img
              src="/src/images/plantInfo1.png"
              alt=""
              className="plantInfo__img"
            />
            <img
              src="/src/images/plantInfo2.png"
              alt=""
              className="plantInfo__img"
            />
            <img
              src="/src/images/plantInfo3.png"
              alt=""
              className="plantInfo__img"
            />
          </div>
          <img
            src="/src/images/plantInfo4.png"
            alt=""
            className="plantInfo__img"
          />
        </div>

        <div className="plantInfo__leftBlock">
          <div className="plantInfo__titleBlock">
            <h2 className="plantInfo__title">Ficus Elastica</h2>
            <div className="plantInfo__score">
              <img
                src="/src/images/star..svg"
                className="plantInfo__scoreImg"
              ></img>
              <div className="plantInfo__scoreText">4.8 based on</div>
            </div>
            <a href="#" className="plantInfo__reviewLink">
              5 Reviews
            </a>
          </div>
          <div className="plantInfo__text">
            A perfect plant for your home or office <br />
            Ficus Elastica is an ornamental plant with large, glossy leaves that
            add coziness and natural aesthetics to the interior. The leaves can
            have a rich green hue or a light burgundy tint, depending on the
            variety.
          </div>
          <div className="plantInfo__care">
            <div className="plantInfo__careTitle">
              Ficus Elastica care conditions
            </div>
            <div className="plantInfo__lighting">
              <div className="plantInfo__lightingTitle">☀️ Lighting</div>
              <div className="plantInfo__lightingDescr">
                Likes bright, diffused light, but no direct sunlight. Can adapt
                to partial shade, but growth slows down and leaves may lose
                color saturation.
              </div>
            </div>
            <div className="plantInfo__watering">
              <div className="plantInfo__wateringTitle">💧 Watering</div>
              <div className="plantInfo__wateringDescr">
                Water after the top layer of soil dries out. In summer - 1-2
                times a week, in winter - less often. Does not like excessive
                moisture - stagnant water can lead to root rot.
              </div>
            </div>
          </div>
          <a href="#" className="plantInfo__add">
            <div className="plantInfo__addText">Add to wishlist</div>
            <img
              src="/src/images/heart.svg"
              className="plantInfo__addImg"
            ></img>
          </a>
        </div>
      </div>
      <PlantPageSlider />
      <PlantPageSlider />
      <Reviews />
    </>
  );
};
