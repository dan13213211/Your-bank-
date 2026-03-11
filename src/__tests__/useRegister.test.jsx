
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useRegister } from '../hooks/useRegister';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../store/slices/userSlice';
import React from 'react';


const mockUserData = {
  email: 'test@test.com',
  password: 'password123',
  firstname: 'Test',
  lastname: 'User',
};


const wrapper = ({ children }) => (
  <Provider store={configureStore({ reducer: { user: userReducer } })}>
    {children}
  </Provider>
);

describe('useRegister hook', () => {
  beforeEach(() => {

    vi.resetAllMocks();
  });

  it('successful registration', async () => {

    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ id: 1, ...mockUserData })
    });

    const { result } = renderHook(() => useRegister(), { wrapper });

    await act(async () => {
      await result.current.register(mockUserData);
    });

    expect(result.current.error).toBe('');
    expect(result.current.loading).toBe(false);
  });

  it('registration fails with short password', async () => {
    const { result } = renderHook(() => useRegister(), { wrapper });

    const invalidData = { ...mockUserData, password: '123' };

    await act(async () => {
      await result.current.register(invalidData);
    });

    expect(result.current.error).toBeTruthy();
    expect(result.current.loading).toBe(false);
  });
  it('handles server error', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({ message: 'Server error' })
    });

    const { result } = renderHook(() => useRegister(), { wrapper });

    await act(async () => {
      await result.current.register(mockUserData);
    });

    expect(result.current.error).toBeTruthy();
    expect(result.current.loading).toBe(false);
  });
});