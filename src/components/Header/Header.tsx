import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  logOut: () => void;
};

export const Header: React.FC<Props> = ({ logOut }) => {
  const [searchInput, setSearchInput] = useState(false);

  function openSearchInput() {
    if (!searchInput) {
      setSearchInput(true);
    } else {
      setSearchInput(false);
    }
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link to="/">
            <img
              className="header__logo"
              src="/src/images/Logo.svg"
              alt="logo"
            />
          </Link>
          <div className="header__title">VerdeSpace</div>
          <div className="header__rightBlock">
            {!searchInput ? (
              <>
                <Link className="header__logOut" onClick={logOut} to="#">
                  <img src="/src/images/logout.png" alt="" />
                </Link>
                <Link className="header__catalogLink" to="/Catalog">
                  Catalog
                </Link>
                <Link className="header__catalogLink" to="/FavoritePage">
                  <img src="/src/images/wishlist.svg" alt="" />
                </Link>
                <button
                  onClick={openSearchInput}
                  className="header__searchLink"
                >
                  <img src="/src/images/search.svg" alt="" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={openSearchInput}
                  className="header__searchLink"
                >
                  <img src="/src/images/search.svg" alt="" />
                </button>
                <input type="text" className="header__searchInput" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
