import { useState } from 'react';

interface PasswordDisplayProps {
  password?: string;
}

export const PasswordDisplay = ({ password }: PasswordDisplayProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!password) return;
    await navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between bg-[#24232C] px-4 py-4 md:px-8 md:py-5 w-full">
      <span className={`text-2xl md:text-3xl font-bold ${password ? 'text-[#E6E5EA]' : 'text-[#817D92]'}`}>
        {password || 'P4$5W0rD!'}
      </span>
      <div className="flex items-center gap-4">
        {copied && <span className="text-[#A4FFAF] text-sm uppercase tracking-wider font-bold">Copied</span>}
        <button
          onClick={handleCopy}
          disabled={!password}
          className="text-[#A4FFAF] hover:text-white transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Copy password"
        >
          <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg" className="fill-current">
            <path d="M13.05 1H2.05a2 2 0 0 0-2 2v13h2V3h11V1Zm5 4h-11a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 16h-11V7h11v14Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};