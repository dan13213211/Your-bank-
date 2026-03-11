import styles
  from "../components/sectionTestimonials/sectionTestimonials.module.scss";
import image from "../assets/images/testimonials.svg";

export const productsContainer = [
  {
    id: 'forIndividuals',
    text: 'For Individuals',
    stylesButton: styles.leftSide
  },
  {
    id: 'forBusinesses',
    text: 'For Businesses',
    stylesButton: styles.rightSide
  }
];
export const testimonialsContainer = [
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
export const testimonialsContainerBusinesses = [
  {
    id: 1,
    name: 'James Wilson',
    text: `YourBank's corporate banking solutions transformed our financial operations. The seamless integration with our ERP system saved us hundreds of hours in manual work each quarter.`,
    image: image,

  },
  {
    id: 2,
    name: 'Jennifer Carter',
    text: 'The business credit line from YourBank allowed us to expand into new markets at the perfect time. Their commercial banking team truly understands growth-stage companies.',
    image: image,

  },
  {
    id: 3,
    name: 'Marcus Rodriguez',
    text: `Our international payments processing time reduced by 70% after switching to YourBank's global business platform. The multi-currency accounts are game-changing for import/export.`,
    image: image,

  },
  {
    id: 4,
    name: 'Sophia Bennett',
    text: `As a franchise owner, YourBank's specialized business accounts helped streamline our financial reporting across 12 locations. The dedicated relationship manager is always available.`,
    image: image,

  },
  {
    id: 5,
    name: 'Thomas Anderson',
    text: `YourBank's commercial real estate financing helped us secure our new headquarters building. Their structured loan products are tailored for growing tech companies.`,
    image: image,

  },
  {
    id: 6,
    name: 'Olivia Chen',
    text: `The business analytics dashboard from YourBank gives us real-time insights into cash flow across all our subsidiaries. Essential tool for strategic decision-making.`,
    image: image,

  },
];