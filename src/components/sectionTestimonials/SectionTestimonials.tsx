import {useState} from "react";
import styles from './sectionTestimonials.module.scss'
import cn from "classnames";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { productsContainer , testimonialsContainer,  testimonialsContainerBusinesses} from '../../constants/sectionTestimonials.ts'

const SectionTestimonials = () => {
  const [page, setPage] = useState('forIndividuals');


  const productsComponents = {
    forIndividuals: testimonialsContainer,
    forBusinesses: testimonialsContainerBusinesses,
  }

  const testimonialsButtons =  productsComponents[page] || testimonialsContainer



  return (
    <>
      <section className={styles.sectionTestimonials}>
        <h2 className={styles.sectionLogoName}>
          <span className={styles.sectionColorText}>Our</span> Products
        </h2>
        <div className={styles.sectionTestimonialsContainer}>
          <p className={styles.sectionTestimonialsTextLogo}>Discover a range of comprehensive and customizable banking products at YourBank,
            designed to suit your unique financial needs and aspirations
          </p>
          <div className={styles.sectionPartTwoButtonContainer} data-active={page}>
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
        <div className={styles.swiperContainer}>
          <Swiper
            key={page}
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1920: {
                slidesPerView: 4,
                spaceBetween: 20
              }
            }}
            className={styles.customSwiper}
          >
            {testimonialsButtons.map(({id, text, image, name}) => (
              <SwiperSlide key={id}>
                <div className={styles.testimonialsBoxes}>
                  <div className={styles.testimonialsBox}>
                    <img
                      src={image}
                      alt={name}
                    />
                    <p className={styles.testimonialsBoxText}>{text}</p>
                    <h3 className={styles.testimonialsBoxName}>{name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}
export default SectionTestimonials;