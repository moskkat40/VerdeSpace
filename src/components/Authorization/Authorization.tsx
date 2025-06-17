import { useState } from 'react';
import { createUser, loginUser } from '../../services/users';
import { LoginModal } from '../LoginModal/LoginModal';

type Props = {
  setLoginAccess: (a: boolean) => void;
  setLoginAccessToken: (a: string) => void;
};

export const Authorization: React.FC<Props> = ({
  setLoginAccess,
  setLoginAccessToken,
}) => {
  const [loginData, setLoginData] = useState({});
  const [userData, setUserData] = useState({});
  const [loginModal, setLoginModal] = useState(false);

  function getAuthorizationData(e) {
    setUserData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  function openLoginModal() {
    return setLoginModal(true);
  }

  function closeLoginModal() {
    return setLoginModal(false);
  }

  function singUp(event) {
    event.preventDefault();

    return createUser(userData);
  }

  function logIn(event) {
    event.preventDefault();

    return loginUser(loginData)
      .then(response => {
        if (response.ok) {
          setLoginAccess(true);

          return response.json();
        }
      })
      .then(data => {
        localStorage.setItem('accessToken', data.access);
        setLoginAccessToken(data.access);
      });
  }

  return (
    <>
      <div className="authorization">
        <div className="authorization__leftSide">
          <h1 className="authorization__leftTitle">Creation starts here</h1>
          <h2 className="authorization__descr">
            Grow your green haven with expert care tips and a thriving
            community.
          </h2>
        </div>
        <div className="authorization__rightSide">
          <a className="authorization__logo" href="#">
            <img
              className="authorization__logoImg"
              src="/src/images/Logo.svg"
              alt="logo"
            />
          </a>
          <div className="authorization__rightTitle">Join VerdeSpace</div>
          <div className="authorization__login">
            <div className="authorization__loginText">
              Already have an account?
            </div>
            <a
              className="authorization__loginLink"
              href="#"
              onClick={openLoginModal}
            >
              Login
            </a>
          </div>
          <button className="authorization__googleButton">
            <img
              className="authorization__googleLogo"
              src="/src/images/google.svg"
              alt="Google Logo"
            />
            <p className="authorization__googleLink">Continue with Google</p>
          </button>
          <div className="authorization__lineBlock">
            <span className="authorization__line"></span>
            <p className="authorization__lineText">or</p>
            <span className="authorization__line"></span>
          </div>
          <form className="authorization__form" action="">
            <label htmlFor="username">User name</label>
            <input
              className="authorization__input"
              id="username"
              type="text"
              placeholder="Enter your user name"
              onChange={event => getAuthorizationData(event)}
            />
            <label htmlFor="email">Email</label>
            <input
              className="authorization__input"
              id="email"
              type="email"
              placeholder="Enter your email"
              onChange={event => getAuthorizationData(event)}
            />
            <label htmlFor="password">Password</label>
            <input
              className="authorization__input"
              id="password"
              type="password"
              placeholder="Minimum 8 characters"
              onChange={event => getAuthorizationData(event)}
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              className="authorization__input"
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />
          </form>
          <button
            className="authorization__button"
            onClick={() => singUp(event)}
          >
            <a className="authorization__signLink" href="">
              Sign up
            </a>
          </button>
        </div>
        {loginModal && (
          <LoginModal
            closeLoginModal={closeLoginModal}
            logIn={logIn}
            setLoginData={setLoginData}
          />
        )}
      </div>
    </>
  );
};
