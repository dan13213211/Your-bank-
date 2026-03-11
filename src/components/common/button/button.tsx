import styles from "./button.module.scss";

interface ButtonProps {
  onClick: () => void;  // функция, которая ничего не принимает и не возвращает
  // возможность передать свой текст
}

const Button = ({onClick}: ButtonProps) => {
  return (
    <button
      className={styles.sectionButton}
      onClick={onClick}
    >Open Account</button>
  )
}
export default Button