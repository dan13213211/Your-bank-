import styles from './Header.module.scss';
import logo from '../../assets/images/shape-30.svg'
import user from '../../assets/images/user.svg'
import {Link} from 'react-router-dom';
import Login from "../modals/loginModal/Login.tsx";
import UserInfo from '../modals/userInfo/userInfo.tsx'
import {useState} from "react";
import SignUpModal from "../modals/signUpModal/SignUp.tsx";
import {navLinks} from '../../constants/navigation'
import {useSelector} from 'react-redux';

const HeaderMobile = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [settings, setSettings] = useState(false);
  const firstName = useSelector((state) => state.user.firstName);
  const lastName = useSelector((state) => state.user.lastName);
  const isUserLoggedIn = firstName !== '' && lastName !== '';
  console.log(window.innerWidth);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.containerLogo}>
            <Link
              to="/"
              className={styles.buttonLogo}
              aria-label="YourBank homepage"
            >
              <img
                className={styles.img}
                src={logo}
                alt="YourBank logo"
              />
              <h1 className={styles.headerTitle}>YourBank</h1>
            </Link>
          </div>
          <div className={styles.containerNav}>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                {navLinks.map(({to, text, id}) => (
                  <li
                    className={styles.navItem}
                    key={id}
                  >
                    <Link
                      to={to}
                      className={styles.navLink}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className={styles.containerButton}>
            {isUserLoggedIn ? (
              <div className={styles.userProfile}>
                <span className={styles.userName}>{lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase()}</span>
                <span className={styles.userLastName}>{firstName[0].toUpperCase() + '.'}</span>
                <button
                  className={styles.userImgButton}
                  onClick={() => setSettings(!settings)}
                >
                  <img src={user} />
                </button>
              </div>
            ) : (
              <>
                <button
                  className={styles.buttonSignUp}
                  onClick={() => setIsSignUpOpen(true)}
                >
                  Sign Up
                </button>
                <button
                  className={styles.buttonLogin}
                  onClick={() => setIsLoginOpen(true)}
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      {isLoginOpen && <Login onClose={() => setIsLoginOpen(false)} />}
      {isSignUpOpen && <SignUpModal onClose={() => setIsSignUpOpen(false)} />}
      {settings && <UserInfo onClose={() => setSettings(false)} />}
    </>
  )
}

export default HeaderMobile;