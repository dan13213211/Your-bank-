import styles from './sectionHeroRightSide.module.scss';
import transaction from '../../../assets/images/transaction.svg';
import usdicon from '../../../assets/images/usdIcon.svg';
import dollar from '../../../assets/images/dollarIcon.svg';
import euro from '../../../assets/images/euroIcon.svg';
import rubicon from '../../../assets/images/rubIcon.svg'
import bitcoin from '../../../assets/images/bitcoinIcon.svg'
import ephir from '../../../assets/images/ephir.svg'
import cn from 'classnames';
import {useState} from 'react'


const SectionHeroRightSide = () => {
  const [value, setValue] = useState('');
  const [final, setFinal] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  }
  const handleSubmit = async (e) => {
    const url = `${import.meta.env.VITE_APP_API_URL}/${import.meta.env.VITE_APP_API_KEY}/latest/USD`;
    try{
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP ошибка! статус: ${response.status}`);
      }
      const data = await response.json();
      const rubRate = data.conversion_rates.RUB;
      const convertedRub = value * rubRate
      setFinal(convertedRub.toFixed(2));
    }
    catch (error) {
      console.error('Ошибка при получении курсов валют:', error);
    }
  }

  return (
    <div className={styles.sectionRight}>
      <div className={styles.rightBox}>
        <div className={styles.boxUsers}>
          <h2 className={styles.boxTransaction}>Your Transactions</h2>
          <div className={styles.payStory}>
            <div className={styles.payStoryBox}>
              <img
                className={styles.imgBox}
                src={transaction}
              />
              <div className={styles.payStoryOpName}>
                <h2 className={styles.transaction}>Transaction</h2>
                <p className={styles.userName}>Joel Kenley</p>
              </div>
              <p className={styles.userCash}>-$68.00</p>
            </div>
          </div>
        </div>
        <div className={styles.boxUsers}>
          <div className={cn(styles.payStory, styles.payStorybottom)}>
            <div className={styles.payStoryBox}>
              <img
                className={cn(styles.imgBox, styles.imgOp)}
                src={transaction}
              />
              <div className={styles.payStoryOpName}>
                <h2 className={styles.transaction}>Transaction</h2>
                <p className={styles.userName}>Joel Kenley</p>
              </div>
              <p className={styles.userCash}>-$68.00</p>
            </div>
          </div>
        </div>
        <div className={styles.boxUsers}>
          <div className={cn(styles.payStory, styles.payStorybottomLast)}>
            <div className={styles.payStoryBox}>
              <img
                className={cn(styles.imgBox, styles.imgLast)}
                src={transaction}
              />
              <div className={styles.payStoryOpName}>
                <h2 className={styles.transaction}>Transaction</h2>
                <p className={styles.userName}>Joel Kenley</p>
              </div>
              <p className={styles.userCash}>-$68.00</p>
            </div>
          </div>
        </div>
        <h2 className={styles.moneySection}>Money Exchange</h2>
        <div className={styles.currencyContainer}>
          <div className={styles.currencyHeaders}>
            <div className={styles.currencyHeader}>
              <div className={styles.currencyNameLeftBox}>
              <img className={styles.iconLeftSide} src={usdicon} />
              <h2 className={styles.label}>USD</h2>
            </div>
              <p className={styles.currencyName}>United States Dollar</p>
            </div>

            <div className={styles.currencyHeader}>
              <div className={styles.currencyNameLeftBox}>
              <img className={styles.iconRightSide} src={rubicon} />
              <h2 className={styles.label}>RUB</h2>
              </div>
              <p className={styles.currencyName}>Russian Ruble</p>
            </div>
          </div>
          <div className={styles.currencyInputs}>
            <input
              className={cn(styles.input, styles.inputBottom)}
              placeholder="Введите сумму в USD"
              value={value}
              onChange={handleChange}
            />
            <input
              className={cn(styles.input, styles.inputBottom)}
              placeholder="Эквивалент в RUB"
              value={final}
              disabled
            />
          </div>
        </div>
        <button className={styles.rightButton} onClick={handleSubmit}>Exchange</button>
      </div>
      <div className={styles.SupportedIcon}>
        <h2 className={styles.currency}>Supported Currency</h2>
        <div className={styles.iconsContainer}>
          <div className={styles.iconIntoBox}>
        <a><img  src={dollar}/></a>
        </div>
          <div className={styles.iconIntoBox}>
            <a><img  src={euro}/></a>
          </div>
          <div className={styles.iconIntoBox}>
            <a><img  src={bitcoin}/></a>
          </div>
          <div className={styles.iconIntoBox}>
            <a><img  src={ephir}/></a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SectionHeroRightSide

