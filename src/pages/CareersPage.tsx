import SectionOne from "../components/careersPageSectionOne/SectionOne.tsx";
import SectionValues
  from "../components/careersPageSectionValues/SectionValues.tsx";
import SectionJob from "../components/careersPageSectionJob/SectionJob.tsx";
import SectionLastPart from "../components/sectionLastPart/SectionLastPart.tsx";

const CareersPage = () => {
  return (
    <>
      <SectionOne />
      <SectionValues />
      <SectionJob/>
      <SectionLastPart/>
    </>
  );
};
export default CareersPage;