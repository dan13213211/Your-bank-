import styles from './sectionTwo.module.scss'
import imgOne from '../../assets/images/sectionTwoIngOne.png'
import imgTwo from '../../assets/images/aboutTwo.png'
import cn from 'classnames'
const SectionAboutOne = () => {
  return (
    <>
      <section className={styles.sectionTwo}>
        <div className={styles.sectionTwoLogoContainer}>
          <h2 className={styles.sectionTwoLogo}>Mission & Vision</h2>
          <p className={styles.sectionTwoText}>We envision being a leading force in the industry, driven by innovation, integrity,
            and inclusivity, creating a brighter financial future for individuals and
            businesses while maintaining a strong commitment to customer satisfaction and community development
          </p>
        </div>
        <div className={styles.sectionTwoInfoContainer}>
          <div className={styles.sectionTwoInfoImageBox}>
            <img className={styles.sectionTwoInfoImg} src={imgOne}/>
          </div>
          <div className={styles.sectionTwoTextContainer}>
            <h2 className={styles.sectionTwoLogoBox}>Mission</h2>
            <p className={styles.sectionTwoTextBox}>At YourBank, our mission is to empower our customers to achieve financial success.
              We are dedicated to delivering innovative banking solutions that cater to their
              unique needs. Through personalized services, expert guidance, and cutting-edge technology,
              we aim to build strong, lasting relationships with our customers. Our mission is to be their
              trusted partner, helping them navigate their financial journey
              and realize their dreams.
            </p>
          </div>
        </div>
        <div className={styles.sectionTwoInfoContainer}>

          <div className={styles.ImgRight}>
            <h2 className={styles.sectionTwoLogoBox}>Vision</h2>
            <p className={cn(styles.sectionTwoTextBox, styles.textBottom)}>Our vision at YourBank
              is to redefine banking by creating a seamless and personalized experience for our customers.
              We envision a future where banking is accessible, transparent, and tailored to individual preferences.
              Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting
              new standards for customer-centric banking. Our vision is to be the preferred financial institution,
              known for our unwavering commitment to excellence, trust, and customer satisfaction.
            </p>
          </div>
          <div className={styles.sectionTwoInfoImageBox}>
            <img className={styles.sectionTwoInfoImg} src={imgTwo}/>
          </div>
        </div>
      </section>
    </>
  )
}
export default SectionAboutOne