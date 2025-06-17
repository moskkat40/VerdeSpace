import './CatalogPage.scss';

import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { FlowerCard } from '../FlowerCard/FlowerCard';
import { useState } from 'react';
import { CategoriesModal } from '../CategoriesModal/CategoriesModal';
import { FilteringModal } from '../FilteringModal/FilteringModal';

export const CatalogPage = () => {
  const [catalogModal, setCatalogModal] = useState(false);
  const [filteringModal, setFilteringModal] = useState(false);

  function openCatalogModal() {
    if (filteringModal) {
      setFilteringModal(false);
    }

    if (!catalogModal) {
      setCatalogModal(true);
    } else {
      setCatalogModal(false);
    }
  }

  function openfilteringModal() {
    if (catalogModal) {
      setCatalogModal(false);
    }

    if (!filteringModal) {
      setFilteringModal(true);
    } else {
      setFilteringModal(false);
    }
  }

  function closeModal() {
    setFilteringModal(false);
  }

  return (
    <>
      <Header />
      <section className="catalogPage">
        <div className="container">
          <div className="catalogPage__filtersAndResult">
            <div className="catalogPage__filtersWrapper">
              <button
                onClick={openCatalogModal}
                className="catalogPage__filtersCategories"
              >
                Categories
              </button>
              <button
                onClick={openfilteringModal}
                className="catalogPage__filterButton"
              >
                Filters
              </button>
            </div>
            <div className="catalogPage__showResult">Showing 110 results</div>
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
      </section>
      {catalogModal && <CategoriesModal />}
      {filteringModal && <FilteringModal closeModal={closeModal} />}
      <Footer />
    </>
  );
};
