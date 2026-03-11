import styles from './userInfo.module.scss'
import {useDispatch} from 'react-redux';
import {setUser} from '../../../store/slices/userSlice';

const UserInfo = ({onClose}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setUser({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }))
    onClose()
  }
  return (
    <div className={styles.boxLogout}>
      <button
        onClick={handleLogout}
        className={styles.button}
      >Exit
      </button>
    </div>

  )
}
export default UserInfo