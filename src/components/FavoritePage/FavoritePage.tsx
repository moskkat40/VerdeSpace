import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import './FavoritePage.scss';
import '../HomePage/HomePage.scss';
import '../CatalogPage/CatalogPage.scss';
import { FlowerCard } from '../FlowerCard/FlowerCard';

export const FavoritePage = () => {
  return (
    <div className="favoritePage">
      <Header />
      <div className="container">
        <div className="favoritePage__wrapper">
          <div className="homePage__text">
            <h2 className="homePage__textTitle">Text</h2>
            <span className="homePage__textLine"></span>
          </div>
          <div className="catalogPage__flowerCards">
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
            <FlowerCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
