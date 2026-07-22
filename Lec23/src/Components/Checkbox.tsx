interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
  }
  
  export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
    return (
      <label className="flex items-center gap-5 cursor-pointer text-[#E6E5EA] text-base md:text-lg select-none">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="w-5 h-5 accent-[#A4FFAF] cursor-pointer"
        />
        {label}
      </label>
    );
  };