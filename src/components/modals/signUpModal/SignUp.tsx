import styles from "./SignUp.module.scss";
import close from "../../../assets/images/close.svg";
import eyeClosed from "../../../assets/images/eyeClosed.svg";
import eyeOpen from "../../../assets/images/eyeOpen.svg";
import cn from "classnames";
import Login from '../loginModal/Login.tsx'
import google from "../../../assets/images/google.svg";
import facebook from "../../../assets/images/facebookModal.svg";
import apple from "../../../assets/images/apple.svg";
import { useEffect, useRef, useState } from "react";
import { useRegister } from '../../../hooks/useRegister.ts';
import {validateForm} from "../../../utils/validation.tsx";

interface LoginModalProps {
  onClose: () => void;
}

const SignUpModal = ({ onClose }: LoginModalProps) => {
  const [login, setLogin] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [validationError, setValidationError] = useState('');
  const firstname = useRef<HTMLInputElement>(null);
  const lastname = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const { register, error: registerError, loading } = useRegister(onClose);

  useEffect(() => {
    if (firstname.current) {
      firstname.current.focus();
    }
  }, []);


  const handleRegister = async () => {
    setValidationError('');
    const isValid = validateForm(name, lastName, emailValue, passwordValue, setValidationError);
    if (!isValid) {
      return;
    }

    const registerData = {
      firstName: name.trim(),
      lastName: lastName.trim(),
      email: emailValue.trim(),
      password: passwordValue.trim(),
    };

    await register(registerData);
  };


  const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && name.length > 3) {
      e.preventDefault();
      lastname.current?.focus();
    }
  };

  const handleLastNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && lastName.length > 3) {
      e.preventDefault();
      emailInputRef.current?.focus();
    }
  };

  const handleEmailKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && emailValue.length > 3) {
      e.preventDefault();
      passwordInputRef.current?.focus();
    }
  };

  const handlePasswordKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && passwordValue.length > 6) {
      e.preventDefault();
      handleRegister();
    }
  };

  if (login) {
    return <Login onClose={onClose} />;
  }


  const displayError = validationError || registerError;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalImgLogo} onClick={onClose}>
          <img src={close} alt='close' />
        </button>

        <div className={styles.modalContainer}>
          <div className={styles.modalLogoContainer}>
            <h2 className={styles.modalLogo}>Sign Up</h2>
            <p className={styles.modalText}>
              Join our community today! Create an account to unlock exclusive features and personalized experiences.
            </p>
          </div>

          {displayError && <div className={styles.errorMessage}>{displayError}</div>}
          {loading && <div className={styles.loading}>Creating account...</div>}

          <form className={styles.modalForm}>
            <input
              className={styles.modalInput}
              ref={firstname}
              type='text'
              placeholder="Enter your First Name"
              onKeyDown={handleNameKeyDown}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              required
            />
            <input
              className={styles.modalInput}
              type='text'
              placeholder="Enter your Last Name"
              onKeyDown={handleLastNameKeyDown}
              ref={lastname}
              onChange={(e) => setLastName(e.target.value)}
              disabled={loading}
              required
            />
            <input
              className={styles.modalInput}
              ref={emailInputRef}
              type='email'
              placeholder="Enter your Email"
              onKeyDown={handleEmailKeyDown}
              onChange={(e) => setEmailValue(e.target.value)}
              disabled={loading}
              required
            />
            <input
              className={styles.modalInput}
              type={isVisible ? 'text' : 'password'}
              autoComplete="current-password"
              aria-label="Password"
              placeholder="Enter your Password"
              onKeyDown={handlePasswordKeyDown}
              ref={passwordInputRef}
              onChange={(e) => setPasswordValue(e.target.value)}
              disabled={loading}
              required
            />
          </form>

          {passwordValue.length > 0 && (
            <button
              className={styles.buttonIsVisible}
              onClick={() => setVisible(!isVisible)}
              disabled={loading}
            >
              <img src={isVisible ? eyeClosed : eyeOpen} alt="toggle visibility" />
            </button>
          )}

          <div className={styles.modalButtonBox}>
            <button
              onClick={handleRegister}
              className={cn(styles.modalLoginButton, styles.active)}
              disabled={loading}
            >
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
            <button
              className={cn(styles.modalLoginButton)}
              onClick={() => setLogin(true)}
              disabled={loading}
            >
              Login
            </button>
          </div>

          <p className={styles.modalContinueBox}>Or Continue with</p>
          <div className={styles.modalImgBox}>
            <img src={google} alt="google" />
            <img src={facebook} alt="facebook" />
            <img src={apple} alt="apple" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;