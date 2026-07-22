export interface PasswordOptions {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
  }
  
  const CHAR_SETS = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  };
  
  export const generatePassword = (length: number, options: PasswordOptions): string => {
    let availableChars = '';
  
    if (options.uppercase) availableChars += CHAR_SETS.uppercase;
    if (options.lowercase) availableChars += CHAR_SETS.lowercase;
    if (options.numbers) availableChars += CHAR_SETS.numbers;
    if (options.symbols) availableChars += CHAR_SETS.symbols;
    if (!availableChars || length <= 0) return '';
  
    let generatedPassword = '';
    
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
  
    for (let i = 0; i < length; i++) {
      generatedPassword += availableChars[array[i] % availableChars.length];
    }
  
    return generatedPassword;
  };