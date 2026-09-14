interface InputProps {
  value: string;
  setValue: (value: string) => void;
}

export default function Input({ value, setValue }: InputProps) {
  return (
    <div className="flex items-center gap-4 w-full py-4">
      <img
        src="/Shape (1).png"
        alt="Search"
        className="w-6 h-6 object-contain"
      />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full bg-transparent text-white text-lg md:text-xl font-light placeholder:text-gray-400 focus:outline-none caret-[#FC4747]"
      />
    </div>
  );
}
