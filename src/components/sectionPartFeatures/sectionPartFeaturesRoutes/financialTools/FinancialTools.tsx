import styles from "../../sectionPartFeatures.module.scss"
import vector from "../../../../assets/images/vector.svg";
const FinancialTools = () => {
  return (
    <>
      <div className={styles.sectionFeaturesBoxes}>
        <div className={styles.sectionFeaturesBoxContainer}>
          <h3 className={styles.sectionFeaturesLogoBox}>Budget Planning</h3>
          <img src={vector} alt="Budget Planning" />
        </div>
        <p className={styles.sectionFeaturesBoxText}>
          Take control of your finances with our intuitive budget planning tools.
          Set spending limits, track expenses, and achieve your financial goals
          with personalized insights and recommendations.
        </p>
      </div>

      <div className={styles.sectionFeaturesBoxes}>
        <div className={styles.sectionFeaturesBoxContainer}>
          <h3 className={styles.sectionFeaturesLogoBox}>Investment Analytics</h3>
          <img src={vector} alt="Investment Analytics" />
        </div>
        <p className={styles.sectionFeaturesBoxText}>
          Make informed investment decisions with our advanced analytics tools.
          Access real-time market data, portfolio performance tracking,
          and risk assessment to optimize your investment strategy.
        </p>
      </div>

      <div className={styles.sectionFeaturesBoxes}>
        <div className={styles.sectionFeaturesBoxContainer}>
          <h3 className={styles.sectionFeaturesLogoBox}>Retirement Calculator</h3>
          <img src={vector} alt="Retirement Calculator" />
        </div>
        <p className={styles.sectionFeaturesBoxText}>
          Plan for your future with our comprehensive retirement planning calculator.
          Estimate your retirement needs, explore different saving scenarios,
          and create a customized plan for financial security.
        </p>
      </div>

      <div className={styles.sectionFeaturesBoxes}>
        <div className={styles.sectionFeaturesBoxContainer}>
          <h3 className={styles.sectionFeaturesLogoBox}>Debt Management</h3>
          <img src={vector} alt="Debt Management" />
        </div>
        <p className={styles.sectionFeaturesBoxText}>
          Get out of debt faster with our smart debt management tools.
          Create payoff strategies, compare interest rates, and track your
          progress toward becoming debt-free with our step-by-step guidance.
        </p>
      </div>
    </>
  );
};

export default FinancialTools;