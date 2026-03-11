
import cn from "classnames";
import imgOne from "../../../../assets/images/sectionPartTwoImages1.svg";
import imgTwo from "../../../../assets/images/sectionPartTwoImages2.svg";
import imgThree from "../../../../assets/images/sectionPartTwoImages3.svg";
import styles from './ForIndividuals.module.scss'
const SectionPartTwoIndividuals = () => {
  return (
    <div className={styles.sectionPartTwoContainerBottom}>
      <div className={cn(styles.sectionPartTwoBox, styles.rightBorder)}>
        <img src={imgOne} />
        <h3 className={styles.sectionPartTwoLogoBottom}>Checking Accounts</h3>
        <p className={styles.sectionPartTwoTextBottom}>Enjoy easy and convenient access to your funds with our range of checking account options.
          Benefit from features such as online and mobile banking,
          debit cards, and free ATM access.
        </p>
      </div>
      <div className={cn(styles.sectionPartTwoBox, styles.rightBorder)}>
        <img src={imgTwo} />
        <h3 className={styles.sectionPartTwoLogoBottom}>Savings Accounts</h3>
        <p className={styles.sectionPartTwoTextBottom}>Build your savings with our competitive interest rates and flexible savings account options.
          Whether you're saving for a specific goal or want to grow your wealth over time,
          we have the right account for you.
        </p>
      </div>
      <div className={styles.sectionPartTwoBox}>
        <img src={imgThree} />
        <h3 className={styles.sectionPartTwoLogoBottom}>Loans and Mortgages</h3>
        <p className={styles.sectionPartTwoTextBottom}>Realize your dreams with our flexible loan and mortgage options.
          From personal loans to home mortgages,
          our experienced loan officers
          are here to guide you through the
          application process and help you secure the funds you need.
        </p>
      </div>
    </div>
  )
}
export default SectionPartTwoIndividuals;