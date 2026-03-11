import styles from "./security.module.scss";
import image from "../../assets/images/securitySectionOne.png"
const SecuritySectionOne = () => {
  return (
    <>
      <section >
        <div className={styles.aboutSectionOneSection}>
          <div className={styles.aboutSectionContainer}>
            <h2 className={styles.aboutSectionLogoBottom}>Your Security is Our <span className={styles.logoBottomColor}>Top Priority</span></h2>
            <p className={styles.aboutSectionText}>At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.
            </p>
          </div>
          <img className={styles.image} src={image}/>
        </div>
      </section>
    </>
  )
}
export default SecuritySectionOne