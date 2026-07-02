export interface Todo {
    id:number,
    title:string,
    time:string,
    isCompleted:boolean
}


export const items = [
    {
        id: 1,
        title: "Dinner",
        time: "Today at 8:00 PM",
        isCompleted: true,
      },
      {
        id: 2,
        title: "Walk with Coby",
        time: "Today at 3:30 PM",
        isCompleted: false,
      },
      {
        id: 3,
        title: "Buy Groceries",
        time: "Today at 10:00 AM",
        isCompleted: false,
      },
      {
        id: 4,
        title: "Go to repair shop",
        time: "Today at 9:00 AM",
        isCompleted: false,
      },
]