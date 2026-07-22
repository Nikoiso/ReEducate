import { calculateStrength } from '../Utils/calculateStrength';
import { type PasswordOptions } from '../Utils/generatePassword';

interface StrengthIndicatorProps {
  length: number;
  options: PasswordOptions;
}

export const StrengthIndicator = ({ length, options }: StrengthIndicatorProps) => {
  const { score, label, colorClass } = calculateStrength(length, options);

  return (
    <div className="flex items-center justify-between bg-[#18171F] px-4 py-4 md:px-8 uppercase">
      <span className="text-[#817D92] font-bold text-base">Strength</span>
      <div className="flex items-center gap-4">
        <span className="text-[#E6E5EA] text-lg md:text-2xl font-bold">{score > 0 ? label : ''}</span>
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((step) => {
            const isActive = step <= score;
            return (
              <div
                key={step}
                className={`w-2.5 h-7 border-2 ${
                  isActive ? colorClass : 'border-[#E6E5EA] bg-transparent'
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};