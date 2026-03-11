import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';

interface LoginCredentials {
  emailValue: string;
  passwordValue: string;
}

export const useLogin = (onSuccess?: () => void) => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async ({ emailValue, passwordValue }: LoginCredentials) => {

    if (!emailValue || !passwordValue) {
      setError('Please fill in all fields');
      return;
    }

    if (passwordValue.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:3000/users?email=${encodeURIComponent(emailValue)}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const users = await response.json();

      if (users.length === 0) {
        setError('User with this email not found');
        return;
      }

      const user = users[0];

      if (user.password === passwordValue) {
        const { password, ...userWithoutPassword } = user;
        dispatch(setUser(userWithoutPassword));
        onSuccess?.();
      } else {
        setError('Incorrect password');
      }
    } catch (err) {
      console.error('Login error:', err);


      if (err instanceof Error) {
        if (err.message.includes('Failed to fetch')) {
          setError('Cannot connect to server. Make sure JSON-Server is running.');
        } else {
          setError(err.message);
        }
      } else {
        setError('Server error. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return { login, error, loading };
};