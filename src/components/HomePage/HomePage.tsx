import { Link } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { HowItWorksSlider } from '../HowItWorksSlider/HowItWorksSlider';
import { getPlants } from '../../services/users';
import { useEffect, useState } from 'react';

type Props = {
  logOut: () => void;
};

export const HomePage: React.FC<Props> = ({ logOut }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [plants, setPlants] = useState(null);

  useEffect(() => {
    getPlants().then(setPlants);
  }, []);

  return (
    <>
      <Header logOut={logOut} />
      <div className="homePage">
        <div className="homePage__promo">
          <video autoPlay muted loop className="homePage__video">
            <source src="/src/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="homePage__title">
            Create a green corner in your home
          </div>
          <div className="homePage__subtitle">
            Choose the perfect plants for your space, taking into account
            lighting, care level, and your preferences.
          </div>
          <button className="homePage__button">
            <Link to="/Catalog">Choose a plant</Link>
          </button>
        </div>
        <div className="container">
          <div className="homePage__categories">
            <div className="homePage__text">
              <h2 className="homePage__textTitle">Popular categories</h2>
              <span className="homePage__textLine"></span>
            </div>
            <div className="homePage__categoriesWrapper">
              <div className="homePage__categoriesItem">
                <Link className="homePage__categoriesItemLink" to="/Catalog">
                  <img
                    className="homePage__categoriesItemImg"
                    src="/src/images/Categories/categories1.png"
                    alt=""
                  />
                  <p className="homePage__categoriesItemText">
                    Flowering plants
                  </p>
                </Link>
              </div>
              <div className="homePage__categoriesItem">
                <Link className="homePage__categoriesItemLink" to="/Catalog">
                  <img
                    className="homePage__categoriesItemImg"
                    src="/src/images/Categories/categories2.png"
                    alt=""
                  />
                  <p className="homePage__categoriesItemText">
                    Palm trees and large plants
                  </p>
                </Link>
              </div>
              <div className="homePage__categoriesItem">
                <Link className="homePage__categoriesItemLink" to="/Catalog">
                  <img
                    className="homePage__categoriesItemImg"
                    src="/src/images/Categories/categories3.png"
                    alt=""
                  />
                  <p className="homePage__categoriesItemText">
                    Succulents and cacti
                  </p>
                </Link>
              </div>
              <div className="homePage__categoriesItem">
                <Link className="homePage__categoriesItemLink" to="/Catalog">
                  <img
                    className="homePage__categoriesItemImg"
                    src="/src/images/Categories/categories4.png"
                    alt=""
                  />
                  <p className="homePage__categoriesItemText">
                    Plants for bright rooms
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <span className="homePage__marqueeLine"></span>
          <div className="homePage__marquee">
            <div className="homePage__marqueeText">
              <img src="/src/images/flower.svg" alt="" />
              Less room, more bloom! Nature fits everywhere.
              <img src="/src/images/flower.svg" alt="" />
              Less room, more bloom! Nature fits everywhere.
              <img src="/src/images/flower.svg" alt="" />
              Less room, more bloom! Nature fits everywhere.
              <img src="/src/images/flower.svg" alt="" />
              Less room, more bloom! Nature fits everywhere.
              <img src="/src/images/flower.svg" alt="" />
              Less room, more bloom! Nature fits everywhere.
            </div>
            <div className="homePage__marqueeText">
              <img src="/src/images/flower.svg" alt="" />
              Less room, more bloom! Nature fits everywhere.
              <img src="/src/images/flower.svg" alt="" />
              Less room, more bloom! Nature fits everywhere.
              <img src="/src/images/flower.svg" alt="" />
              Less room, more bloom! Nature fits everywhere.
              <img src="/src/images/flower.svg" alt="" />
              Less room, more bloom! Nature fits everywhere.
              <img src="/src/images/flower.svg" alt="" />
              Less room, more bloom! Nature fits everywhere.
            </div>
          </div>
          <span className="homePage__marqueeLine"></span>
          <div className="homePage__text">
            <h2 className="homePage__textTitle">How does it work?</h2>
            <span className="homePage__textLine"></span>
          </div>
          <div className="homePage__swiper">
            <HowItWorksSlider />
            <img src="/src/images/sliderPhoto.png" alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
