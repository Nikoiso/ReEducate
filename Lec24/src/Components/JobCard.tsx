import { type Json } from '../data';

interface JobCardProps {
  job: Json;
  onAddFilter: (tag: string) => void;
}

export default function JobCard({ job, onAddFilter }: JobCardProps) {
  const allTags = [
    job.role,
    job.level,
    ...(job.languages || []),
    ...(job.tools || []),
  ];

  return (
    <div
      className={`bg-white rounded-[5px] p-8 shadow-[0_15px_20px_-5px_rgba(13,113,130,0.15)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative pt-12 md:pt-8 ${
        job.featured ? 'border-l-[5px] border-[#5CA5A5]' : ''
      }`}
    >
      <img
        src={job.logo}
        alt={job.company}
        className="w-12 h-12 md:w-22 md:h-22 rounded-full absolute -top-6 md:static"
      />

      <div className="flex flex-col gap-2 w-full md:w-auto">
        <div className="flex items-center gap-3">
          <span className="text-[#5CA5A5] font-bold text-sm md:text-base">
            {job.company}
          </span>
          {job.new && (
            <span className="bg-[#5CA5A5] text-white text-[11px] font-bold px-2 py-1 rounded-full uppercase tracking-wider leading-none">
              New!
            </span>
          )}
          {job.featured && (
            <span className="bg-[#2B3939] text-white text-[11px] font-bold px-2 py-1 rounded-full uppercase tracking-wider leading-none">
              Featured
            </span>
          )}
        </div>

        <h2 className="font-bold text-base md:text-lg text-[#2B3939] hover:text-[#5CA5A5] cursor-pointer transition-colors">
          {job.position}
        </h2>

        <p className="text-[#7C8F8F] text-sm font-medium flex items-center gap-2">
          <span>{job.postedAt}</span>
          <span>•</span>
          <span>{job.contract}</span>
          <span>•</span>
          <span>{job.location}</span>
        </p>

        <hr className="w-full border-[#7C8F8F]/30 my-2 md:hidden" />
      </div>

      <div className="flex flex-wrap gap-4">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => onAddFilter(tag)}
            className="bg-[#EEF6F6] hover:bg-[#5CA5A5] hover:text-white text-[#5CA5A5] font-bold text-[13px] px-2.5 py-1.5 rounded-[4px] transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}