import type { ChangeEvent } from 'react'

interface ReplyProps {
  replyingToUsername: string
  replyText: string
  onReplyTextChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onSendReply: () => void
  currentUserAvatar?: string
}

export default function Reply({
  replyingToUsername,
  replyText,
  onReplyTextChange,
  onSendReply,
  currentUserAvatar = '/Oval.png',
}: ReplyProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg w-full shadow-sm border border-[#E9EBF0] flex flex-col sm:flex-row items-start gap-4">
      <img 
        alt="Profile" 
        src={currentUserAvatar} 
        className="hidden sm:block w-10 h-10 rounded-full object-cover" 
      />

      <textarea
        value={replyText}
        onChange={onReplyTextChange}
        placeholder={`Reply to @${replyingToUsername}...`}
        rows={3}
        className="w-full flex-1 p-3 border border-[#E9EBF0] rounded-lg text-[#324152] placeholder-gray-400 focus:outline-none focus:border-[#5357B6] resize-none"
      />

      <div className="flex items-center justify-between w-full sm:w-auto">
        <img 
          alt="Profile" 
          src={currentUserAvatar} 
          className="w-10 h-10 rounded-full object-cover sm:hidden" 
        />

        <button
          onClick={onSendReply}
          className="bg-[#5357B6] hover:bg-[#474ab0] text-white font-bold px-6 py-3 rounded-lg uppercase text-sm tracking-wider cursor-pointer"
        >
          REPLY
        </button>
      </div>
    </div>
  )
}