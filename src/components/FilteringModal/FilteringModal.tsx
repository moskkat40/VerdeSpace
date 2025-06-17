import './FilteringModal.scss';

type Props = {
  closeModal: () => boolean;
};

export const FilteringModal: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="filteringModal">
      <div className="filteringModal__header">
        <div className="filteringModal__title">Filters</div>
        <button className="filteringModal__close" onClick={closeModal}>
          ×
        </button>
      </div>

      <div className="filteringModal__block">
        <div className="filteringModal__subtitle">Lighting</div>
        <div className="filteringModal__group">
          <label className="filteringModal__item">
            <input type="checkbox" value="Bright" />
            Bright
          </label>
          <label className="filteringModal__item">
            <input type="checkbox" />
            Scattered
          </label>
          <label className="filteringModal__item">
            <input type="checkbox" />
            Shadow
          </label>
        </div>
      </div>

      <div className="filteringModal__block">
        <div className="filteringModal__subtitle">Watering</div>
        <div className="filteringModal__group">
          <label className="filteringModal__item">
            <input type="checkbox" />
            Rarely
          </label>
          <label className="filteringModal__item">
            <input type="checkbox" />
            Moderately
          </label>
          <label className="filteringModal__item">
            <input type="checkbox" />
            Often
          </label>
        </div>
      </div>

      <div className="filteringModal__block">
        <div className="filteringModal__subtitle">Care</div>
        <div className="filteringModal__group">
          <label className="filteringModal__item">
            <input type="checkbox" />
            Light
          </label>
          <label className="filteringModal__item">
            <input type="checkbox" />
            Average
          </label>
          <label className="filteringModal__item">
            <input type="checkbox" />
            Exacting
          </label>
        </div>
      </div>

      <div className="filteringModal__block">
        <div className="filteringModal__subtitle">Size</div>
        <div className="filteringModal__group">
          <label className="filteringModal__item">
            <input type="checkbox" />
            Small
          </label>
          <label className="filteringModal__item">
            <input type="checkbox" />
            Medium
          </label>
          <label className="filteringModal__item">
            <input type="checkbox" />
            Large
          </label>
        </div>
      </div>

      <div className="filteringModal__block">
        <div className="filteringModal__subtitle">Additionally</div>
        <div className="filteringModal__group">
          <label className="filteringModal__item">
            <input type="checkbox" />
            Air purification
          </label>
          <label className="filteringModal__item">
            <input type="checkbox" />
            Hypoallergenic
          </label>
          <label className="filteringModal__item">
            <input type="checkbox" />
            Blooming
          </label>
        </div>
      </div>

      <button className="filteringModal__button">Show result</button>
    </div>
  );
};
