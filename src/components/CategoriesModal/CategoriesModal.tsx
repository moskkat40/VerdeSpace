import './CategoriesModal.scss';

export const CategoriesModal = () => {
  return (
    <div className="сategoriesModal">
      <div className="сategoriesModal__header">
        <input
          type="text"
          className="сategoriesModal__search"
          placeholder="Search by category"
        />
      </div>
      <div className="сategoriesModal__categories">
        <label className="сategoriesModal__category">
          <input type="checkbox" />
          <span>Flowering plants</span>
        </label>
        <label className="сategoriesModal__category">
          <input type="checkbox" />
          <span>Succulents and cacti</span>
        </label>
        <label className="сategoriesModal__category">
          <input type="checkbox" />
          <span>Palms and large plants</span>
        </label>
        <label className="сategoriesModal__category">
          <input type="checkbox" />
          <span>Ramps and climbers</span>
        </label>
      </div>
      <button className="сategoriesModal__button">Show result</button>
    </div>
  );
};
