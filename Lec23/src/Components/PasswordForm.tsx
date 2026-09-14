import { useState } from 'react';
import { LengthSlider } from './LengthSlider';
import { Checkbox } from './Checkbox';
import { StrengthIndicator } from './StrengthIndicator';
import { type PasswordOptions } from '../Utils/generatePassword';

interface PasswordFormProps {
  onGenerate: (length: number, options: PasswordOptions) => void;
}

export const PasswordForm = ({ onGenerate }: PasswordFormProps) => {
  const [length, setLength] = useState<number>(10);
  const [options, setOptions] = useState<PasswordOptions>({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  });

  const handleCheckboxChange = (key: keyof PasswordOptions) => (value: boolean) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(length, options);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#24232C] p-4 md:p-8 flex flex-col gap-8 w-full">
      <LengthSlider length={length} onChange={setLength} />

      <div className="flex flex-col gap-5">
        <Checkbox
          label="Include Uppercase Letters"
          checked={options.uppercase}
          onChange={handleCheckboxChange('uppercase')}
        />
        <Checkbox
          label="Include Lowercase Letters"
          checked={options.lowercase}
          onChange={handleCheckboxChange('lowercase')}
        />
        <Checkbox
          label="Include Numbers"
          checked={options.numbers}
          onChange={handleCheckboxChange('numbers')}
        />
        <Checkbox
          label="Include Symbols"
          checked={options.symbols}
          onChange={handleCheckboxChange('symbols')}
        />
      </div>

      <StrengthIndicator length={length} options={options} />

      <button
        type="submit"
        className="w-full bg-[#A4FFAF] hover:bg-[#18171F] text-[#24232C] hover:text-[#A4FFAF] border-2 border-[#A4FFAF] font-bold py-5 flex items-center justify-center gap-4 transition-all cursor-pointer uppercase text-base md:text-lg"
      >
        <span>Generate</span>

      </button>
    </form>
  );
};