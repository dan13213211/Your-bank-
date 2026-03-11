import styles from './security.module.scss';
import { boxes } from "../../constants/securitySectionTwo.ts";

const SecuritySectionTwo = () => {
  return (
    <section className={styles.sectionTwo}>
      <div className={styles.logoContainer}>
        <h2 className={styles.sectionLogo}>
          How We <span className={styles.color}>Protect You</span>
        </h2>
        <p className={styles.sectionText}>
          At YourBank, we prioritize the security and confidentiality of your
          financial information. Our state-of-the-art encryption technology and
          stringent data protection measures ensure your assets and transactions
          are safeguarded at all times.
        </p>
      </div>

      <div className={styles.boxes}>
        {boxes.map(({ img, logo, text }) => (
          <div key={logo} className={styles.box}>
            <div className={styles.boxLogoContainer}>
              <img
                src={img}
                className={styles.img}
                alt={`${logo} icon`}
              />
              <h3 className={styles.boxLogo}>{logo}</h3>
            </div>
            <p className={styles.boxText}>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecuritySectionTwo;