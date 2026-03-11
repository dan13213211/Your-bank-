import styles from "../../sectionPartFeatures.module.scss"
import vector from "../../../../assets/images/vector.svg";

const OnlineBanking = () => {
  return (
    <>
    <div className={styles.sectionFeaturesBoxes}>
      <div className={styles.sectionFeaturesBoxContainer}>
        <h3 className={styles.sectionFeaturesLogoBox}>24/7 Account Access</h3>
        <img src={vector} />
      </div>
      <p className={styles.sectionFeaturesBoxText}>Enjoy the convenience of accessing your accounts anytime,
        anywhere through our secure online banking platform. Check balances,
        transfer funds, and pay bills with ease.
      </p>
    </div>
    <div className={styles.sectionFeaturesBoxes}>
      <div className={styles.sectionFeaturesBoxContainer}>
        <h3 className={styles.sectionFeaturesLogoBox}>Mobile Banking App</h3>
        <img src={vector} />
      </div>
      <p className={styles.sectionFeaturesBoxText}>Stay connected to your finances on the go with our user-friendly mobile banking app.
        Easily manage your accounts, deposit checks, and make payments
        from your smartphone or tablet.
      </p>
    </div>
    <div className={styles.sectionFeaturesBoxes}>
      <div className={styles.sectionFeaturesBoxContainer}>
        <h3 className={styles.sectionFeaturesLogoBox}>Secure Transactions</h3>
        <img src={vector} />
      </div>
      <p className={styles.sectionFeaturesBoxText}>Rest assured knowing that your transactions are protected by industry-leading security measures.
        We employ encryption and multi-factor
        authentication to safeguard your financial information.
      </p>
    </div>
    <div className={styles.sectionFeaturesBoxes}>
      <div className={styles.sectionFeaturesBoxContainer}>
        <h3 className={styles.sectionFeaturesLogoBox}>Bill Pay and Transfers</h3>
        <img src={vector} />
      </div>
      <p className={styles.sectionFeaturesBoxText}>Save time and avoid late fees with our convenient bill pay service.
        Set up recurring payments or make one-time transfers between your accounts with just a few clicks.
      </p>
    </div>
    </>
  )
}
export default OnlineBanking