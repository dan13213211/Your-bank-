import styles from './login.module.scss'
import cn from 'classnames'
import google from '../../../assets/images/google.svg'
import facebook from '../../../assets/images/facebookModal.svg'
import apple from '../../../assets/images/apple.svg'
import close from '../../../assets/images/close.svg'
import eyeOpen from '../../../assets/images/eyeOpen.svg'
import eyeClosed from '../../../assets/images/eyeClosed.svg'
import {useRef, useState, useEffect} from "react";
import SignUp from "../signUpModal/SignUp.tsx";
import { useLogin } from '../../../hooks/useLogin';

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal = ({onClose}: LoginModalProps) => {
  const [isVisible, setVisible] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [forgot, setForgot] = useState(false)
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const { login, error, loading } = useLogin(onClose);

  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [])

  const handleLogin = async () => {
    await login({ emailValue, passwordValue });
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && emailValue.length > 3) {
      e.preventDefault()
      passwordInputRef.current?.focus();
    }
  }

  const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && passwordValue.length > 6) {
      e.preventDefault()
      handleLogin()
    }
  }

  if (forgot) {
    return <SignUp onClose={onClose} />;
  }

  return (
    <>
      <div
        className={styles.modalOverlay}
        onClick={onClose}
      >
        <div
          className={styles.modal}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles.modalImgLogo}
            onClick={onClose}
          >
            <img
              src={close}
              alt='close'
            />
          </button>
          <div className={styles.modalContainer}>
            <div className={styles.modalLogoContainer}>
              <h2 className={styles.modalLogo}>Login</h2>
              <p className={styles.modalText}>Welcome back! Please log in to access your account.</p>
            </div>
            {loading && <div className={styles.loading}>Logging in...</div>}
            {error && <div className={styles.errorMessage}>{error}</div>}
            <form
              className={styles.modalForm}
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className={styles.modalInput}
                ref={emailInputRef}
                type={'email'}
                placeholder={"Enter your Email"}
                value={emailValue}
                onKeyDown={handleEmailKeyDown}
                onChange={(e) => {
                  setEmailValue(e.target.value);
                }}
                required
              />
              <input
                className={styles.modalInput}
                type={isVisible ? 'text' : 'password'}
                autoComplete="current-password"
                aria-label="Password"
                placeholder={"Enter your Password"}
                value={passwordValue}
                onKeyDown={handlePasswordKeyDown}
                ref={passwordInputRef}
                onChange={(e) => {
                  setPasswordValue(e.target.value);
                }}
                required

              />
            </form>

            {passwordValue.length > 0 && (
              <button
                className={styles.buttonIsVisible}
                onClick={() => setVisible(!isVisible)}
                type="button"
              >
                <img
                  src={isVisible ? eyeClosed : eyeOpen}
                  alt="toggle visibility"
                />
              </button>
            )}

            <button
              className={styles.modalForgot}
              onClick={() => setForgot(true)}
            >
              Forgot Password?
            </button>

            <div className={styles.modalButtonBox}>
              <button
                onClick={handleLogin}
                className={cn(styles.modalLoginButton, styles.active)}
              >Login
              </button>
              <button
                className={cn(styles.modalLoginButton)}
                onClick={() => setForgot(true)}
              >
                Sign Up
              </button>
            </div>

            <p className={styles.modalContinueBox}>Or Continue with</p>
            <div className={styles.modalImgBox}>
              <img
                src={google}
                alt="google"
              />
              <img
                src={facebook}
                alt="facebook"
              />
              <img
                src={apple}
                alt="apple"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginModal