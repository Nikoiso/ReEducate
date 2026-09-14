import { useState, type ChangeEvent } from 'react'
import Counter from './Counter'
import DeleteModal from './DeleteModal'
import Reply from './Reply'
import { INITIAL_COMMENTS, CURRENT_USER, type CommentType, type ReplyType } from './Profiles'

export default function Main() {
  const [commentText, setCommentText] = useState<string>('')
  const [replyText, setReplyText] = useState<string>('')
  const [replyingToTarget, setReplyingToTarget] = useState<{ parentId: number; username: string } | null>(null)
  
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editText, setEditText] = useState<string>('')

  const [commentToDelete, setCommentToDelete] = useState<{ id: number; isReply: boolean; parentId?: number } | null>(null)

  const [comments, setComments] = useState<CommentType[]>(INITIAL_COMMENTS)

  const handleSendComment = () => {
    if (commentText.trim() === '') return

    const newComment: CommentType = {
      id: Date.now(),
      text: commentText,
      createdAt: 'just now',
      score: 0,
      user: CURRENT_USER,
      replies: []
    }

    setComments([...comments, newComment])
    setCommentText('')
  }

  const handleSendReply = (parentId: number, replyingToUsername: string) => {
    if (replyText.trim() === '') return

    const newReply: ReplyType = {
      id: Date.now(),
      text: replyText,
      createdAt: 'just now',
      score: 0,
      replyingTo: replyingToUsername,
      user: CURRENT_USER
    }

    setComments(comments.map(c => {
      if (c.id === parentId) {
        return { ...c, replies: [...c.replies, newReply] }
      }
      return c
    }))

    setReplyText('')
    setReplyingToTarget(null)
  }

  const handleStartEdit = (id: number, currentText: string) => {
    setEditingId(id)
    setEditText(currentText)
  }

  const handleUpdate = (id: number, isReply: boolean, parentId?: number) => {
    if (editText.trim() === '') return

    if (isReply && parentId) {
      setComments(comments.map(c => {
        if (c.id === parentId) {
          return {
            ...c,
            replies: c.replies.map(r => r.id === id ? { ...r, text: editText } : r)
          }
        }
        return c
      }))
    } else {
      setComments(comments.map(c => c.id === id ? { ...c, text: editText } : c))
    }

    setEditingId(null)
    setEditText('')
  }

  const confirmDelete = () => {
    if (!commentToDelete) return

    if (commentToDelete.isReply && commentToDelete.parentId) {
      setComments(comments.map(c => {
        if (c.id === commentToDelete.parentId) {
          return { ...c, replies: c.replies.filter(r => r.id !== commentToDelete.id) }
        }
        return c
      }))
    } else {
      setComments(comments.filter(c => c.id !== commentToDelete.id))
    }

    setCommentToDelete(null)
  }

  return (
    <main className="bg-[#F5F6FA] min-h-screen p-4 sm:p-8 flex flex-col items-center gap-5 justify-center font-sans relative">
      
      <div className="w-full max-w-2xl flex flex-col gap-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-4">
            
            <div className="bg-white p-4 sm:p-6 rounded-lg w-full shadow-sm border border-[#E9EBF0] flex flex-col sm:flex-row gap-4 sm:gap-5 items-start relative">
              <div className="hidden sm:block">
                <Counter initialScore={comment.score} />
              </div>

              <div className="flex-1 flex flex-col gap-3 w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <img 
                      alt={comment.user.username} 
                      src={comment.user.avatar} 
                      className="w-8 h-8 rounded-full object-cover" 
                    />
                    <span className="font-bold text-[#324152]">{comment.user.username}</span>
                    
                    {comment.user.isYou && (
                      <span className="bg-[#5357B6] text-white text-xs px-1.5 py-0.5 rounded-sm font-medium">
                        you
                      </span>
                    )}
                    
                    <span className="text-gray-400 text-sm">{comment.createdAt}</span>
                  </div>

                  <div className="hidden sm:flex items-center gap-4">
                    {comment.user.isYou ? (
                      <>
                        <button
                          onClick={() => setCommentToDelete({ id: comment.id, isReply: false })}
                          className="flex items-center gap-1.5 text-[#ED6365] hover:opacity-70 font-bold text-sm cursor-pointer"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => handleStartEdit(comment.id, comment.text)}
                          className="flex items-center gap-1.5 text-[#5357B6] hover:opacity-70 font-bold text-sm cursor-pointer"
                        >
                          Edit
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setReplyingToTarget(replyingToTarget?.parentId === comment.id ? null : { parentId: comment.id, username: comment.user.username })}
                        className="flex items-center gap-1.5 text-[#5357B6] hover:opacity-70 font-bold text-sm cursor-pointer"
                      >
                        Reply
                      </button>
                    )}
                  </div>
                </div>

                {editingId === comment.id ? (
                  <div className="flex flex-col items-end gap-3 w-full">
                    <textarea
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      rows={3}
                      className="w-full p-3 border border-[#E9EBF0] rounded-lg text-[#324152] focus:outline-none focus:border-[#5357B6] resize-none"
                    />
                    <button
                      onClick={() => handleUpdate(comment.id, false)}
                      className="bg-[#5357B6] hover:bg-[#474ab0] text-white font-bold px-6 py-3 rounded-lg uppercase text-sm cursor-pointer"
                    >
                      UPDATE
                    </button>
                  </div>
                ) : (
                  <p className="text-[#67727E] leading-relaxed text-sm sm:text-base wrap-break-words">
                    {comment.text}
                  </p>
                )}

                <div className="flex sm:hidden items-center justify-between w-full mt-2 pt-2">
                  <Counter initialScore={comment.score} />

                  <div className="flex items-center gap-4">
                    {comment.user.isYou ? (
                      <>
                        <button
                          onClick={() => setCommentToDelete({ id: comment.id, isReply: false })}
                          className="flex items-center gap-1.5 text-[#ED6365] hover:opacity-70 font-bold text-sm cursor-pointer"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => handleStartEdit(comment.id, comment.text)}
                          className="flex items-center gap-1.5 text-[#5357B6] hover:opacity-70 font-bold text-sm cursor-pointer"
                        >
                          Edit
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setReplyingToTarget(replyingToTarget?.parentId === comment.id ? null : { parentId: comment.id, username: comment.user.username })}
                        className="flex items-center gap-1.5 text-[#5357B6] hover:opacity-70 font-bold text-sm cursor-pointer"
                      >
                        Reply
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {replyingToTarget?.parentId === comment.id && (
              <Reply
                replyingToUsername={replyingToTarget.username}
                replyText={replyText}
                onReplyTextChange={(e: ChangeEvent<HTMLTextAreaElement>) => setReplyText(e.target.value)}
                onSendReply={() => handleSendReply(comment.id, replyingToTarget.username)}
              />
            )}

            {comment.replies.length > 0 && (
              <div className="pl-4 sm:pl-10 border-l-2 border-[#E9EBF0] flex flex-col gap-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex flex-col gap-4">
                    <div className="bg-white p-4 sm:p-6 rounded-lg w-full shadow-sm border border-[#E9EBF0] flex flex-col sm:flex-row gap-4 sm:gap-5 items-start relative">
                      <div className="hidden sm:block">
                        <Counter initialScore={reply.score} />
                      </div>

                      <div className="flex-1 flex flex-col gap-3 w-full">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-3">
                            <img 
                              alt={reply.user.username} 
                              src={reply.user.avatar} 
                              className="w-8 h-8 rounded-full object-cover" 
                            />
                            <span className="font-bold text-[#324152]">{reply.user.username}</span>
                            
                            {reply.user.isYou && (
                              <span className="bg-[#5357B6] text-white text-xs px-1.5 py-0.5 rounded-sm font-medium">
                                you
                              </span>
                            )}
                            
                            <span className="text-gray-400 text-sm">{reply.createdAt}</span>
                          </div>

                          <div className="hidden sm:flex items-center gap-4">
                            {reply.user.isYou ? (
                              <>
                                <button
                                  onClick={() => setCommentToDelete({ id: reply.id, isReply: true, parentId: comment.id })}
                                  className="flex items-center gap-1.5 text-[#ED6365] hover:opacity-70 font-bold text-sm cursor-pointer"
                                >
                                  Delete
                                </button>
                                <button
                                  onClick={() => handleStartEdit(reply.id, reply.text)}
                                  className="flex items-center gap-1.5 text-[#5357B6] hover:opacity-70 font-bold text-sm cursor-pointer"
                                >
                                  Edit
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => setReplyingToTarget(replyingToTarget?.parentId === comment.id && replyingToTarget.username === reply.user.username ? null : { parentId: comment.id, username: reply.user.username })}
                                className="flex items-center gap-1.5 text-[#5357B6] hover:opacity-70 font-bold text-sm cursor-pointer"
                              >
                                Reply
                              </button>
                            )}
                          </div>
                        </div>

                        {editingId === reply.id ? (
                          <div className="flex flex-col items-end gap-3 w-full">
                            <textarea
                              value={editText}
                              onChange={(e) => setEditText(e.target.value)}
                              rows={3}
                              className="w-full p-3 border border-[#E9EBF0] rounded-lg text-[#324152] focus:outline-none focus:border-[#5357B6] resize-none"
                            />
                            <button
                              onClick={() => handleUpdate(reply.id, true, comment.id)}
                              className="bg-[#5357B6] hover:bg-[#474ab0] text-white font-bold px-6 py-3 rounded-lg uppercase text-sm cursor-pointer"
                            >
                              UPDATE
                            </button>
                          </div>
                        ) : (
                          <p className="text-[#67727E] leading-relaxed text-sm sm:text-base wrap-break-words">
                            <span className="text-[#5357B6] font-bold me-1">@{reply.replyingTo}</span>
                            {reply.text}
                          </p>
                        )}

                        <div className="flex sm:hidden items-center justify-between w-full mt-2 pt-2">
                          <Counter initialScore={reply.score} />

                          <div className="flex items-center gap-4">
                            {reply.user.isYou ? (
                              <>
                                <button
                                  onClick={() => setCommentToDelete({ id: reply.id, isReply: true, parentId: comment.id })}
                                  className="flex items-center gap-1.5 text-[#ED6365] hover:opacity-70 font-bold text-sm cursor-pointer"
                                >
                                  Delete
                                </button>
                                <button
                                  onClick={() => handleStartEdit(reply.id, reply.text)}
                                  className="flex items-center gap-1.5 text-[#5357B6] hover:opacity-70 font-bold text-sm cursor-pointer"
                                >
                                  Edit
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => setReplyingToTarget(replyingToTarget?.parentId === comment.id && replyingToTarget.username === reply.user.username ? null : { parentId: comment.id, username: reply.user.username })}
                                className="flex items-center gap-1.5 text-[#5357B6] hover:opacity-70 font-bold text-sm cursor-pointer"
                              >
                                Reply
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-2xl flex flex-col sm:flex-row items-start gap-4 shadow-sm border border-[#E9EBF0]">
        <img 
          alt="Profile" 
          src={CURRENT_USER.avatar} 
          className="hidden sm:block w-10 h-10 rounded-full object-cover" 
        />

        <textarea
          value={commentText}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
          rows={3}
          className="w-full flex-1 p-3 border border-[#E9EBF0] rounded-lg text-[#324152] placeholder-gray-400 focus:outline-none focus:border-[#5357B6] resize-none"
        />

        <div className="flex items-center justify-between w-full sm:w-auto">
          <img 
            alt="Profile" 
            src={CURRENT_USER.avatar} 
            className="w-10 h-10 rounded-full object-cover sm:hidden" 
          />

          <button
            onClick={handleSendComment}
            className="bg-[#5357B6] hover:bg-[#474ab0] text-white font-bold px-6 py-3 rounded-lg uppercase text-sm tracking-wider cursor-pointer"
          >
            SEND
          </button>
        </div>
      </div>

      <DeleteModal
        isOpen={commentToDelete !== null}
        onClose={() => setCommentToDelete(null)}
        onConfirm={confirmDelete}
      />

    </main>
  )
}