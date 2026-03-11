import {useState} from 'react';
import styles from './sectionPartFeatures.module.scss';
import OnlineBanking
  from "./sectionPartFeaturesRoutes/onlineBanking/OnlineBanking.tsx";
import FinancialTools
  from "./sectionPartFeaturesRoutes/financialTools/FinancialTools.tsx";
import CustomerSupport
  from "./sectionPartFeaturesRoutes/customerSupport/CustomerSupport.tsx";
import cn from "classnames";


const SectionPartFeatures = () => {
  const [activeFeature, setActiveFeature] = useState('onlineBanking');

  const features = [
    {id: 'onlineBanking', text: 'Online Banking'},
    {id: 'financialTools', text: 'Financial Tools'},
    {id: 'customerSupport', text: 'Customer support'}
  ]

  const featureComponents = {
    onlineBanking: <OnlineBanking />,
    financialTools: <FinancialTools />,
    customerSupport: <CustomerSupport />,
  }

  const renderFeatures = featureComponents[activeFeature] || <OnlineBanking />

  return (
    <div className={styles.sectionFeaturesSettings}>
      <div className={styles.sectionFeaturesContainerLogo}>
        <h2 className={styles.sectionFeaturesLogo}>Our <span className={styles.sectionFeaturesLogoColor}>Features</span>
        </h2>
        <p className={styles.sectionFeaturesText}>Experience a host of powerful features...</p>
      </div>
      <div className={styles.sectionFeaturesInfoContainer}>
        <div className={styles.sectionFeaturesButtonsContainer}>
          {features.map(({id, text}) => (
            <button
              type="button"
              key={id}
              onClick={() => setActiveFeature(id)}
              className={cn(styles.sectionFeaturesButton, activeFeature === id && styles.active)}
            >{text}</button>
          ))}
        </div>
        <div className={styles.sectionFeaturesInfoBox}>
          {renderFeatures}
        </div>
      </div>
    </div>
  );
};
export default SectionPartFeatures;