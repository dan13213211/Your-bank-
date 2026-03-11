import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}


const loadStateFromLocalStorage = (): UserState => {
  try {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsed = JSON.parse(savedUser);

      return {
        firstName: parsed.firstName || '',
        lastName: parsed.lastName || '',
        email: parsed.email || '',
        password: '',
      };
    }
  } catch (error) {
    console.error('Failed to load user from localStorage:', error);
  }

  return {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };
};

const initialState: UserState = loadStateFromLocalStorage();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.password = action.payload.password || '';
      try {
        const { password, ...userWithoutPassword } = action.payload;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      } catch (error) {
        console.error('Failed to save user to localStorage:', error);
      }
    },
    clearUser(state) {
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.password = '';
      try {
        localStorage.removeItem('user');
      } catch (error) {
        console.error('Failed to clear user from localStorage:', error);
      }
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;