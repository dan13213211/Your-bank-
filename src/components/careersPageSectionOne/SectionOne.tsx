import styles from './style.module.scss'
import image from '../../assets/images/imageCareers.png'
const SectionOne = () => {
  return (
    <section>
      <div className={styles.sectionOne}>
        <div className={styles.sectionOneLogoContainer}>
          <h1 className={styles.sectionOneLogo}>Welcome to  <span className={styles.sectionOneLogoColor}>YourBank </span>Careers!</h1>
          <p className={styles.sectionOneText}>
            Join our team and embark on a rewarding
            journey in the banking industry. At YourBank, we are committed to fostering
            a culture of excellence and providing opportunities for professional growth. With a focus on innovation,
            customer service, and integrity, we strive to make a positive impact
            in the lives of our customers and communities.
            Join us today and be a part of our mission to shape
            the future of banking.
          </p>
        </div>
        <div>
          <img className={styles.sectionOneImg} src={image} />
        </div>
      </div>
    </section>
  )
}
export default SectionOne