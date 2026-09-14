interface SearchBarProps {
    selectedFilters: string[];
    onRemoveFilter: (tag: string) => void;
    onClear: () => void;
  }
  
  export default function SearchBar({
    selectedFilters,
    onRemoveFilter,
    onClear,
  }: SearchBarProps) {
    if (selectedFilters.length === 0) return null;
  
    return (
      <div className="bg-white rounded-[5px] shadow-[0_15px_20px_-5px_rgba(13,113,130,0.15)] p-5 relative z-10 -mt-9 mb-10 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-4">
          {selectedFilters.map((tag) => (
            <div
              key={tag}
              className="flex items-center bg-[#EEF6F6] rounded-[4px] overflow-hidden font-bold text-[#5CA5A5] text-[13px]"
            >
              <span className="px-2.5 py-1.5">{tag}</span>
              <button
                onClick={() => onRemoveFilter(tag)}
                className="bg-[#5CA5A5] hover:bg-[#2B3939] text-white px-2.5 py-1.5 font-bold transition-colors"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
  
        <button
          onClick={onClear}
          className="text-[#5CA5A5] hover:underline font-bold text-[13px]"
        >
          Clear
        </button>
      </div>
    );
  }