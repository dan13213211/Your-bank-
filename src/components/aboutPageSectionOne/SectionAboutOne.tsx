import styles from './sectionAboutOne.module.scss'
import image from '../../assets/images/AboutWelcomeImage.png'
const SectionAboutOne = () => {
return (
  <section >
<div className={styles.aboutSectionOneSection}>
  <div className={styles.aboutSectionContainer}>
    <h3 className={styles.aboutSectionLogo}>Welcome to YourBank</h3>
    <h2 className={styles.aboutSectionLogoBottom}>Where Banking Meets <span className={styles.logoBottomColor}>Excellence!</span></h2>
    <p className={styles.aboutSectionText}>At YourBank, we believe that banking should be more than just transactions.
      It should be an experience that empowers individuals and businesses to thrive and reach their
      financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services
      that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive
      to provide the best banking experience for our valued customers.
      Join us on this exciting journey and discover a new level of banking excellence.
    </p>
  </div>
  <img className={styles.image} src={image}/>
</div>
  </section>
)
}
export default SectionAboutOne