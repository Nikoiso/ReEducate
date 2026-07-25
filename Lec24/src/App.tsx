import { useState } from 'react';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import JobCard from './Components/JobCard';
import { Data, type Json } from './data';
import './App.css'

export default function App() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const addFilter = (filterTag: string) => {
    if (!selectedFilters.includes(filterTag)) {
      setSelectedFilters([...selectedFilters, filterTag]);
    }
  };

  const removeFilter = (filterToRemove: string) => {
    setSelectedFilters(selectedFilters.filter((tag) => tag !== filterToRemove));
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const filteredJobs = Data.filter((job: Json) => {
    const jobTags = [
      job.role,
      job.level,
      ...(job.languages || []),
      ...(job.tools || []),
    ];

    return selectedFilters.every((filter) => jobTags.includes(filter));
  });

  return (
    <div className="min-h-screen bg-[#EFFAFA] font-sans pb-20">
      <Header />

      <main className="max-w-[1110px] mx-auto px-6">
        <SearchBar
          selectedFilters={selectedFilters}
          onRemoveFilter={removeFilter}
          onClear={clearFilters}
        />

        <div className={`flex flex-col gap-10 md:gap-6 ${selectedFilters.length === 0 ? 'mt-12' : ''}`}>
          {filteredJobs.map((job: Json) => (
            <JobCard key={job.id} job={job} onAddFilter={addFilter} />
          ))}
        </div>
      </main>
    </div>
  );
}