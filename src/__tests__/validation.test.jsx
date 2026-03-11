import {validateForm} from '../utils/validation.tsx';

describe('validateForm', () => {
  test('should true for valid data', () => {
    const mockSetError = vi.fn();
    const result = validateForm(
      'John',
      'Doe',
      'john@example.com',
      '123456',
      mockSetError
    );
    expect(result).toBe(true);
    expect(mockSetError).not.toHaveBeenCalled();
  });
  test('returns error for short name', () => {
    const mockSetError = vi.fn();
    const result = validateForm(
      'J',
      'Doe',
      'john@example.com',
      '123456',
      mockSetError
    );
    expect(result).toBe(false);
    expect(mockSetError).toHaveBeenCalled();
  })
  test('returns error for short lastname', () => {
    const mockSetError = vi.fn();
    const result = validateForm(
      'John',
      'D',
      'john@example.com',
      '123456',
      mockSetError
    );
    expect(result).toBe(false);
    expect(mockSetError).toHaveBeenCalled();
  });
  test('returns error @ for email', () => {
    const mockSetError = vi.fn();
    const result = validateForm(
      'John',
      'Doe',
      'johnexample.com',
      '123456',
      mockSetError
    );
    expect(result).toBe(false);
    expect(mockSetError).toHaveBeenCalled();
  })
  test('returns error "." for email', () => {
    const mockSetError = vi.fn();
    const result = validateForm(
      'John',
      'Doe',
      'johne@xamplecom',
      '123456',
      mockSetError
    );
    expect(result).toBe(false);
    expect(mockSetError).toHaveBeenCalled();
  });
  test('returns error password < 6', () => {
    const mockSetError = vi.fn();
    const result = validateForm(
      'John',
      'Doe',
      'john@example.com',
      '12345',
      mockSetError
    );
    expect(result).toBe(false);
    expect(mockSetError).toHaveBeenCalled();
  })
})
