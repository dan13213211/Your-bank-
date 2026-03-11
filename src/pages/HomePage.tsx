import SectionHero from "../components/sectionHero/SectionHero.tsx";
import SectionPartTwo from "../components/sectionPartTwo/SectionPartTwo.tsx";
import SectionPartFeatures
  from "../components/sectionPartFeatures/SectionPartFeatures.tsx";
import SectionTestimonials
  from "../components/sectionTestimonials/SectionTestimonials.tsx";
import SectionLastPart from "../components/sectionLastPart/SectionLastPart.tsx";


const HomePage = () => {
  return (
    <>
      <SectionHero />
      <SectionPartTwo />
      <SectionPartFeatures />
      <SectionTestimonials />
      <SectionLastPart />
    </>
  )
}
export default HomePage;