import { useState } from 'react'

export default function Counter({ initialScore = 0 }) {
  const [count, setCount] = useState(initialScore)

  const handleIncrement = () => setCount((prev) => prev + 1)
  const handleDecrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0))

  return (
    <div className="bg-[#F5F6FA] flex flex-row sm:flex-col items-center justify-between rounded-xl px-3 py-2 sm:py-3 w-24 sm:w-10 h-10 sm:h-24 select-none shrink-0">
      <button 
        onClick={handleIncrement} 
        className="text-[#C5C7F8] hover:text-[#5357B6] font-bold text-lg leading-none cursor-pointer"
      >
        +
      </button>

      <span className="text-[#5357B6] font-bold text-sm sm:text-base leading-none">
        {count}
      </span>

      <button 
        onClick={handleDecrement} 
        className="text-[#C5C7F8] hover:text-[#5357B6] font-bold text-lg leading-none cursor-pointer"
      >
        −
      </button>
    </div>
  )
}