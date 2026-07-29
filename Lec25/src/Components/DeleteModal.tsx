interface DeleteModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
  }
  
  export default function DeleteModal({ isOpen, onClose, onConfirm }: DeleteModalProps) {
    if (!isOpen) return null
  
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg p-6 max-w-sm w-full flex flex-col gap-4 shadow-lg">
          <h2 className="text-xl font-bold text-[#324152]">Delete comment</h2>
          
          <p className="text-[#67727E] text-sm leading-relaxed">
            Are you sure you want to delete this comment? This will remove the comment and can't be undone.
          </p>
  
          <div className="flex gap-3 mt-2">
            <button
              onClick={onClose}
              className="flex-1 bg-[#67727E] hover:opacity-90 text-white font-medium py-3 rounded-lg text-sm uppercase cursor-pointer"
            >
              NO, CANCEL
            </button>
            
            <button
              onClick={onConfirm}
              className="flex-1 bg-[#ED6365] hover:opacity-90 text-white font-medium py-3 rounded-lg text-sm uppercase cursor-pointer"
            >
              YES, DELETE
            </button>
          </div>
        </div>
      </div>
    )
  }