import { useState } from 'react';
import './App.css'
import { PasswordDisplay } from './Components/PasswordDisplay';
import { PasswordForm } from './Components/PasswordForm';
import { generatePassword, type PasswordOptions } from './Utils/generatePassword';

export default function App() {
  const [password, setPassword] = useState<string>('');

  const handleGenerate = (length: number, options: PasswordOptions) => {
    const newPassword = generatePassword(length, options);
    setPassword(newPassword);
  };

  return (
    <main className="min-h-screen bg-[#0E0E14] text-[#E6E5EA] flex flex-col items-center justify-center px-4 font-mono">
      <div className="w-full max-w-135 flex flex-col gap-6">
        <h1 className="text-center text-[#817D92] text-lg md:text-2xl font-bold">Password Generator</h1>
        <PasswordDisplay password={password} />
        <PasswordForm onGenerate={handleGenerate} />
      </div>
    </main>
  );
}