import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { PlantInfo } from '../PlantInfo/PlantInfo';
import './PlantPage.scss';

export const PlantPage = () => {
  return (
    <>
      <Header />
      <div className="plantPage">
        <div className="container">
          <PlantInfo />
        </div>
        <Footer />
      </div>
    </>
  );
};
