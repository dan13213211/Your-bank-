import { useState } from 'react';
import styles from './sectionLastPart.module.scss';
import Button from "../common/button/button.tsx";
import SignUpModal from "../modals/signUpModal/SignUp.tsx";

const SectionLastPart = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  return (
    <>
      <div className={styles.sectionLastContainer}>
        <div className={styles.sectionLastBoxText}>
          <h2 className={styles.sectionLastBoxLogo}>
            Start your financial journey with
            <span className={styles.sectionLastWords}>YourBank today!</span>
          </h2>
          <p className={styles.sectionLastText}>
            Ready to take control of your finances? Join YourBank now, and let us help you achieve your
            financial goals with our tailored solutions and exceptional customer service
          </p>
        </div>
        <div className={styles.sectionLastBoxButton}>
          <Button onClick={() => setIsSignUpOpen(true)} />
        </div>
      </div>
      {isSignUpOpen && <SignUpModal onClose={() => setIsSignUpOpen(false)} />}
    </>
  );
};

export default SectionLastPart;