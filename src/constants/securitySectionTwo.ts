import imgOne from '../assets/images/protectImgOne.svg'
import imgTwo from '../assets/images/protectImgTwo.svg'
import imgThree from '../assets/images/protectImgThree.svg'
import imgFour from '../assets/images/protectImgFour.svg'
interface SecurityFeature {
  img: string;
  logo: string;
  text: string;
}

export const boxes: SecurityFeature[] = [
  {
    img: imgOne,
    logo: 'Secure Online Banking Platform',
    text: 'Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.'
  },
  {
    img: imgTwo,
    logo: 'Multi-Factor Authentication',
    text: 'To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.'
  },
  {
    img: imgThree,
    logo: 'Fraud Monitoring',
    text: 'We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.'
  },
  {
    img: imgFour,
    logo: 'Secure Mobile Banking',
    text: 'Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.'
  }
]