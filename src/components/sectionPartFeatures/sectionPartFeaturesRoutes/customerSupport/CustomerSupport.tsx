import styles from "../../sectionPartFeatures.module.scss"
import vector from "../../../../assets/images/vector.svg";

const CustomerSupport = () => {
  return (
    <>
      <div className={styles.sectionFeaturesBoxes}>
        <div className={styles.sectionFeaturesBoxContainer}>
          <h3 className={styles.sectionFeaturesLogoBox}>24/7 Live Support</h3>
          <img src={vector} alt="24/7 Live Support" />
        </div>
        <p className={styles.sectionFeaturesBoxText}>
          Get help whenever you need it with our round-the-clock customer support.
          Our knowledgeable representatives are available 24/7 via phone,
          chat, or email to assist with any questions or concerns.
        </p>
      </div>

      <div className={styles.sectionFeaturesBoxes}>
        <div className={styles.sectionFeaturesBoxContainer}>
          <h3 className={styles.sectionFeaturesLogoBox}>Dedicated Relationship Managers</h3>
          <img src={vector} alt="Dedicated Relationship Managers" />
        </div>
        <p className={styles.sectionFeaturesBoxText}>
          Enjoy personalized service with your own dedicated relationship manager.
          They'll work with you to understand your financial needs and provide
          tailored solutions and expert advice for your unique situation.
        </p>
      </div>

      <div className={styles.sectionFeaturesBoxes}>
        <div className={styles.sectionFeaturesBoxContainer}>
          <h3 className={styles.sectionFeaturesLogoBox}>Financial Education Resources</h3>
          <img src={vector} alt="Financial Education Resources" />
        </div>
        <p className={styles.sectionFeaturesBoxText}>
          Expand your financial knowledge with our comprehensive educational resources.
          Access tutorials, webinars, articles, and guides to help you make
          informed decisions and improve your financial literacy.
        </p>
      </div>

      <div className={styles.sectionFeaturesBoxes}>
        <div className={styles.sectionFeaturesBoxContainer}>
          <h3 className={styles.sectionFeaturesLogoBox}>Quick Issue Resolution</h3>
          <img src={vector} alt="Quick Issue Resolution" />
        </div>
        <p className={styles.sectionFeaturesBoxText}>
          Experience fast and efficient problem-solving with our streamlined
          issue resolution process. We prioritize your concerns and work
          diligently to resolve any problems quickly and effectively.
        </p>
      </div>
    </>
  );
};

export default CustomerSupport;