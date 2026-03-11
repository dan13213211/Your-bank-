import styles from './sectionThree.module.scss'
import { boxes } from '../../constants/sectionAboutThree.ts';
const SectionAboutThree = () => {
  return (
    <>
      <section className={styles.sectionThree}>
        <div>
          <h2 className={styles.sectionThreeLogo}>Press Releases</h2>
          <p className={styles.sectionThreeText}>Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
        </div>
        <div className={styles.sectionThreeboxes}>
          <div className={styles.sectionThreeboxes}>
            {boxes.map(({img, logo, date, text}) => (

              <div className={styles.sectionThreeBox} key={logo}>
                <img src={img} alt={logo}/>
                <div className={styles.sectionThreeBoxBottom}>
                  <h2 className={styles.sectionThreeBoxLogo}>
                    {logo}
                  </h2>
                  <div className={styles.sectionThreeBoxLocation}>
                    <p className={styles.sectionThreeBoxInfo}>Location: Moscow</p>
                    <p className={styles.sectionThreeBoxInfo}>{date}</p>
                  </div>
                  <p className={styles.sectionThreeBoxText}>
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default SectionAboutThree