export const validateForm = (
  name: string,
  lastName: string,
  emailValue: string,
  passwordValue: string,
  setValidationError: (error: string) => void
): boolean => {
  if (!name.trim() || name.length < 2) {
    setValidationError('First name must be at least 2 characters');
    return false;
  }
  if (!lastName.trim() || lastName.length < 2) {
    setValidationError('Last name must be at least 2 characters');
    return false;
  }
  if (!emailValue.includes('@') || !emailValue.includes('.')) {
    setValidationError('Please enter a valid email');
    return false;
  }
  if (passwordValue.length < 6) {
    setValidationError('Password must be at least 6 characters');
    return false;
  }
  return true;
};