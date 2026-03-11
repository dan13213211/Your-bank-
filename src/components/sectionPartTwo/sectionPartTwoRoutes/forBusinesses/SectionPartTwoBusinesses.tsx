import cn from "classnames";
import styles from './Businesses.module.scss'
import imgOne from "../../../../assets/images/sectionPartTwoImages1.svg";
import imgTwo from "../../../../assets/images/sectionPartTwoImages2.svg";
import imgThree from "../../../../assets/images/sectionPartTwoImages3.svg";


const SectionPartTwoBusinesses = () => {
  return (
    <div className={styles.sectionPartTwoContainerBottom}>
      <div className={cn(styles.sectionPartTwoBox, styles.rightBorder)}>
        <img src={imgOne} />
        <h3 className={styles.sectionPartTwoLogoBottom}>Business Checking</h3>
        <p className={styles.sectionPartTwoTextBottom}> Streamline your business finances with specialized checking accounts.
          Features include multi-user access, higher transaction limits,
          and integrated payroll services.
        </p>
      </div>
      <div className={cn(styles.sectionPartTwoBox, styles.rightBorder)}>
        <img src={imgTwo} />
        <h3 className={styles.sectionPartTwoLogoBottom}>Commercial Loans</h3>
        <p className={styles.sectionPartTwoTextBottom}> Grow your business with our commercial lending solutions.
          From equipment financing to expansion capital,
          we offer competitive rates and flexible terms tailored for businesses.
        </p>
      </div>
      <div className={styles.sectionPartTwoBox}>
        <img src={imgThree} />
        <h3 className={styles.sectionPartTwoLogoBottom}>Merchant Services</h3>
        <p className={styles.sectionPartTwoTextBottom}>Accept payments seamlessly with our merchant services.
          Get secure payment processing, POS systems,
          and detailed analytics to optimize your business operations.
        </p>
      </div>
    </div>
  )
}
export default SectionPartTwoBusinesses;