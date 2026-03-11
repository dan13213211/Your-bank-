import styles from './style.module.scss'
import {values} from '../../constants/sectionValues.ts'
const SectionValues = () => {
  return (
    <section>
      <div className={styles.sectionValuesContainer}>
        <div className={styles.sectionValuesLogoContainer}>
          <h2 className={styles.sectionValuesLogo}>Our <span className={styles.sectionValuesColor}>Values</span>
          </h2>
          <p className={styles.sectionValuesText}>At YourBank, our values form the foundation of our organization and
            guide our actions. We believe in upholding the highest standards of integrity,
            delivering exceptional service, and embracing innovation. These values define our culture
            and shape the way we work together to achieve our goals.
          </p>
        </div>
        <div className={styles.sectionValuesBoxes}>
            {values.map(({id, text}) => {
              return (
                <>
                <div key={id} className={styles.sectionValuesBox}>
                <h3 className={styles.sectionValuesBoxLogo}>{id}</h3>
              <p className={styles.sectionValuesBoxText}>{text}</p>
                </div>
            </>
              )
            })}
        </div>
      </div>
    </section>
  )
}
export default SectionValues;