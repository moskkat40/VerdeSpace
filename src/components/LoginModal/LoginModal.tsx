import '../Authorization/Authorization.scss';
import '../LoginModal/LoginModal.scss';

type Props = {
  closeLoginModal: () => void;
  logIn: () => void;
  setLoginData: (e) => void;
};

export const LoginModal: React.FC<Props> = ({
  closeLoginModal,
  logIn,
  setLoginData,
}) => {
  function getLoginData(e) {
    setLoginData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <>
      <div className="overlay">
        <form className="loginModal" action="">
          <button className="loginModal__close" onClick={closeLoginModal}>
            ×
          </button>
          <label htmlFor="email">Email</label>
          <input
            className="authorization__input"
            id="email"
            type="email"
            placeholder="Enter your email"
            onChange={event => getLoginData(event)}
          />
          <label htmlFor="password">Password</label>
          <input
            className="authorization__input"
            id="password"
            type="password"
            placeholder="Minimum 8 characters"
            onChange={event => getLoginData(event)}
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="authorization__input"
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
          />
          <button
            className="authorization__button"
            onClick={() => logIn(event)}
          >
            <a className="authorization__signLink" href="">
              Sign in
            </a>
          </button>
        </form>
      </div>
    </>
  );
};
