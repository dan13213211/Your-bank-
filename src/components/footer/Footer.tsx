import styles from './footer.module.scss'
import logo from '../../assets/images/shape-30.svg'
import email from '../../assets/images/email.svg'
import telephone from '../../assets/images/telephone.svg'
import location from '../../assets/images/location.svg'
import facebook from '../../assets/images/facebook.svg'
import telegram from '../../assets/images/telegram.svg'
import inbook from '../../assets/images/inbook.svg'
import cn from "classnames";
import {Link} from "react-router-dom";
import {navLinks} from "../../constants/navigation.ts";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogoContainer}>
        <img className={styles.footerImgLogo} src={logo} alt="YourBank logo" />
        <h2 className={styles.footerLogoText}>YourBank</h2>
      </div>
      <div className={styles.footerAnchorContainer}>
        {navLinks.map(({to, text, id}) => (
            <Link
              className={styles.footerAnchorText}
              to={to}
              key={id}
            >
              {text}
            </Link>
        ))}
      </div>
      <div className={styles.footerInfoContainer}>
        <div className={styles.footerInfoBox}>
          <img src={email} alt=""/>
          <a>hello@skillbirdge.com</a>
        </div>
        <div className={styles.footerInfoBox}>
          <img src={telephone} alt=""/>
          <a>+91 91813 23 2309</a>
        </div>
        <div className={styles.footerInfoBox}>
          <img src={location} alt=""/>
          <a>Somewhere in the World</a>
        </div>
      </div>
      <div className={styles.footerBottomContainer}>
        <div className={styles.footerImgBottom}>
          <a><img src={facebook} alt="facebook"/></a>
          <a><img src={telegram} alt="telegram"/></a>
          <a><img src={inbook} alt="inbook"/></a>
        </div>
        <p className={cn(styles.footerBottomText, styles.left)}>YourBank All Rights Reserved</p>
        <p className={cn(styles.footerBottomText, styles.last)}>Privacy Policy | Terms of Service</p>
    </div>
    </div>
  )
}
export default Footer