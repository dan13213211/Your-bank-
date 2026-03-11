import {useSelector} from 'react-redux'

export function useAuth() {
  const {
    firstName,
    lastName,
    email,
    password,
    id
  } = useSelector((state) => state.user)
  return {
    isAuth: !!email,
    firstName,
    lastName,
    email,
    password,
    id
  }
}