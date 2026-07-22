import { type PasswordOptions } from './generatePassword';

export type StrengthLevel = 'TOO WEAK!' | 'WEAK' | 'MEDIUM' | 'STRONG';

export interface StrengthResult {
  score: number;
  label: StrengthLevel;
  colorClass: string;
}

export const calculateStrength = (length: number, options: PasswordOptions): StrengthResult => {
  const activeOptionsCount = Object.values(options).filter(Boolean).length;

  if (length === 0 || activeOptionsCount === 0) {
    return { score: 0, label: 'TOO WEAK!', colorClass: 'border-white bg-transparent' };
  }

  let score = 1;

  if (length >= 8 && activeOptionsCount >= 2) score = 2;
  if (length >= 10 && activeOptionsCount >= 3) score = 3;
  if (length >= 12 && activeOptionsCount >= 4) score = 4;

  switch (score) {
    case 1:
      return { score: 1, label: 'TOO WEAK!', colorClass: 'bg-[#F64A4A] border-[#F64A4A]' };
    case 2:
      return { score: 2, label: 'WEAK', colorClass: 'bg-[#FB7C58] border-[#FB7C58]' };
    case 3:
      return { score: 3, label: 'MEDIUM', colorClass: 'bg-[#F8CD65] border-[#F8CD65]' };
    case 4:
      return { score: 4, label: 'STRONG', colorClass: 'bg-[#A4FFAF] border-[#A4FFAF]' };
    default:
      return { score: 1, label: 'TOO WEAK!', colorClass: 'bg-[#F64A4A] border-[#F64A4A]' };
  }
};