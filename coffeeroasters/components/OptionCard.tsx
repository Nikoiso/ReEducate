interface OptionCardProps {
    title: string;
    description: string;
    isSelected: boolean;
    onClick: () => void;
    price?: string;
  }
  
  export default function OptionCard({ title, description, isSelected, onClick, price }: OptionCardProps) {
    return (
      <div
        onClick={onClick}
        className={`p-8 rounded-xl cursor-pointer transition-all duration-300 flex flex-col justify-between ${
          isSelected ? 'bg-[#0E8784] text-white' : 'bg-[#F4F1EA] text-[#333D4B] hover:bg-[#e2ded4]'
        }`}
      >
        <div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className={`text-sm leading-relaxed ${isSelected ? 'text-white' : 'text-[#83888F]'}`}>{description}</p>
        </div>
        {price && <span className={`mt-6 text-xl font-bold ${isSelected ? 'text-white' : 'text-[#333D4B]'}`}>${price}</span>}
      </div>
    );
  }