import styles from "../../sectionTestimonials.module.scss";
import image from "../../../../assets/images/testimonials.svg";
import {SwiperSlide} from "swiper/react";

const SectionIndividuals = () => {
  const testimonialsContainer = [
    {
      id: 1,
      name: 'John D',
      text: `I recently started my own business,
          and YourBank has been instrumental in helping me
          set up my business accounts and secure the financing I needed. Their expert guidance and tailored
          solutions have been invaluable.`,
      image: image
    },
    {
      id: 2,
      name: 'Sara T',
      text: 'YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.',
      image: image,
    },
    {
      id: 3,
      name: 'Michael R',
      text: `The mortgage process was seamless with YourBank. 
          Their team guided me through every step and found me the perfect rate. 
          I couldn't be happier with my new home!`,
      image: image,

    },
    {
      id: 4,
      name: 'Emily Chen',
      text: `As a freelancer, managing finances was always challenging until I found YourBank.
          Their digital tools and 24/7 customer support have made financial management effortless.`,
      image: image,

    },
    {
      id: 5,
      name: 'David Wilson',
      text: `YourBank helped my small business secure a crucial loan during a difficult period.
          Their understanding of business needs and quick processing saved our company.`,
      image: image,

    },
    {
      id: 6,
      name: 'Lisa Martinez',
      text: `The investment advisory services at YourBank have helped grow my retirement savings by 35% in just two years.
          Their financial advisors truly understand long-term wealth building.`,
      image: image,

    }
  ];
  return (

  );
};
export default SectionIndividuals;