export interface UserType {
    username: string
    avatar: string
    isYou: boolean
  }
  
  export interface ReplyType {
    id: number
    text: string
    createdAt: string
    score: number
    replyingTo: string
    user: UserType
  }
  
  export interface CommentType {
    id: number
    text: string
    createdAt: string
    score: number
    user: UserType
    replies: ReplyType[]
  }
  
  export const CURRENT_USER: UserType = {
    username: 'juliusomo',
    avatar: '/Oval.png',
    isYou: true,
  }
  
  export const USERS: Record<string, UserType> = {
    amyrobson: {
      username: 'amyrobson',
      avatar: '/Oval (4).png',
      isYou: false,
    },
    maxblagun: {
      username: 'maxblagun',
      avatar: '/Oval (3).png',
      isYou: false,
    },
    ramsesmiron: {
      username: 'ramsesmiron',
      avatar: '/Oval (2).png',
      isYou: false,
    },
    juliusomo: CURRENT_USER,
  }
  
  export const INITIAL_COMMENTS: CommentType[] = [
    {
      id: 1,
      text: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: '1 month ago',
      score: 12,
      user: USERS.amyrobson,
      replies: [],
    },
    {
      id: 2,
      text: "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: '2 weeks ago',
      score: 5,
      user: USERS.maxblagun,
      replies: [
        {
          id: 3,
          text: "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: '1 week ago',
          score: 4,
          replyingTo: 'maxblagun',
          user: USERS.ramsesmiron,
        },
        {
          id: 4,
          text: "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: '2 days ago',
          score: 2,
          replyingTo: 'ramsesmiron',
          user: CURRENT_USER,
        },
      ],
    },
  ]