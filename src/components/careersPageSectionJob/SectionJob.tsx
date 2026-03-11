import style from './sectionJob.module.scss'
import job from '../../assets/images/jobImage.svg'
import {cards} from '../../constants/sectionJob.ts'
const SectionJob = () => {
  return (
    <section>
      <div className={style.sectionJobContainer}>
        <h2 className={style.sectionJobLogo}>Job Openings</h2>
        <p className={style.sectionJobLogoText}>
          Explore exciting job openings at YourBank, where we value talent,
          innovation, and a passion for customer service. Join our team and be part
          of shaping a brighter future in the banking industry
        </p>
      </div>
      <div className={style.sectionJobCardContainer}>
        {cards.map((card, index) => (
          <div key={index} className={style.sectionJobCardBox}>
            <h3 className={style.sectionJobCardLogo}>{card.logo}</h3>
            <div className={style.sectionJobCardDescription}>
              <p className={style.sectionJobCardLocation}>Location: Moscow</p>
              <p className={style.sectionJobCardLocation}>{card.department}</p>
            </div>
            <div className={style.sectionJobCardAbout}>
              <h2 className={style.sectionJobCardAboutLogo}>About This Job</h2>
              <p className={style.sectionJobCardAboutText}>{card.about}</p>
            </div>
            <div className={style.sectionJobCardRequirementsContainer}>
              <h2 className={style.sectionJobCardRequirementsLogo}>
                Requirements & Qualifications
              </h2>
              <ul className={style.sectionJobCardRequirementsBox}>
                {card.list.map((item, i) => (
                  <li key={i} className={style.sectionJobCardRequirementsBoxText}>
                    <img src={job} alt="job Image" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <button className={style.sectionButton}>Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SectionJob