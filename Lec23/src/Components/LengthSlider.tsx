interface LengthSliderProps {
    length: number;
    onChange: (value: number) => void;
  }
  
  export const LengthSlider = ({ length, onChange }: LengthSliderProps) => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-[#E6E5EA] text-base md:text-lg">Character Length</span>
          <span className="text-[#A4FFAF] text-2xl md:text-3xl font-bold">{length}</span>
        </div>
        <input
          type="range"
          min={0}
          max={20}
          value={length}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-[#18171F] appearance-none cursor-pointer accent-[#A4FFAF]"
        />
      </div>
    );
  };