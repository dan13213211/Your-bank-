import styles from './SectionHero.module.scss'
import subtract from '../../assets/images/subtract.svg'
import SectionHeroRightSide
  from "./sectionHeroRightSide/SectionHeroRightSide.tsx";
import Button from "../common/button/button.tsx";
import {useState} from "react";
import SignUpModal from "../modals/signUpModal/SignUp.tsx";


const SectionHero = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  return (
    <>
    <section className={styles.section}>
      <div className={styles.sectionLeftPart}>
        <div className={styles.sectionAnnotation}>
          <img
            className={styles.subImg}
            src={subtract}
          />
          <p>No LLC Required, No Credit Check.</p>
        </div>
        <div className={styles.sectionLogo}>
          <h1 className={styles.sectionHeader}>Welcome to YourBank
            Empowering Your <span className={styles.sectionHeaderLastPart}>Financial Journey</span>
          </h1>
        </div>
        <div className={styles.sectionText}>
          <p>At YourBank, our mission is to provide
            comprehensive banking solutions that empower
            individuals and businesses to achieve their
            financial goals. We are committed to delivering
            personalized and innovative services that
            prioritize our customers' needs.
          </p>
        </div>
        <div className={styles.button}>
          <Button onClick={() => setIsSignUpOpen(true)}/>
        </div>
      </div>
      <SectionHeroRightSide />
    </section>
  {isSignUpOpen && <SignUpModal onClose={() => setIsSignUpOpen(false)} />}
    </>
  )
}
export default SectionHero;