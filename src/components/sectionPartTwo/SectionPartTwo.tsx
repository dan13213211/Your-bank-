import {useState} from "react";
import styles from './SectionPartTwo.module.scss'
import cn from "classnames";
import SectionPartTwoIndividuals
  from "./sectionPartTwoRoutes/forIndividuals/SectionPartTwoIndividuals.tsx";
import SectionPartTwoBusinesses
  from "./sectionPartTwoRoutes/forBusinesses/SectionPartTwoBusinesses.tsx";



const SectionPartTwo = () => {
  const [page, setPage] = useState('forIndividuals');
  const productsContainer = [
    {id: 'forIndividuals', text: 'For Individuals', stylesButton: styles.leftSide},
    {id: 'forBusinesses', text: 'For Businesses', stylesButton: styles.rightSide}
  ];

  const productsComponents = {
    forIndividuals: <SectionPartTwoIndividuals />,
    forBusinesses: <SectionPartTwoBusinesses />,
  }
  const activeProductsComponents = productsComponents[page] ||
    <SectionPartTwoIndividuals />;
  
  return (
    <>
      <section className={styles.sectionPartTwo}>
        <h2 className={styles.sectionLogoName}>
          <span className={styles.sectionColorText}>Our</span> Products
        </h2>
        <div className={styles.sectionPartTwoContainer}>
          <p className={styles.sectionPartTwoTextLogo}>Discover a range of comprehensive and customizable banking products at YourBank,
            designed to suit your unique financial needs and aspirations
          </p>
          <div className={styles.sectionPartTwoButtonContainer}  data-active={page}>
            {productsContainer.map(({id, text, stylesButton}) => (
              <button
                type="button"
                key={id}
                onClick={() => setPage(id)}
                className={cn(styles.sectionPartTwoButton, stylesButton, page === id && styles.active)}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
      </section>
      {activeProductsComponents}
    </>
  )
}
export default SectionPartTwo