import { useState } from "react";
import { type Todo, items } from "../items";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import styles from "./TodoApp.module.css";
import bannerImg from "../assets/Rectangle 2.png";

function TodoApp() {
  const [todo, setTodo] = useState<Todo[]>(items);

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      time: "Today at 12:00 PM",
      isCompleted: false
    };
    setTodo([...todo, newTodo]);
  };

  const handleToggle = (id: number) => {
    setTodo(
      todo.map((el) =>
        el.id === id ? { ...el, isCompleted: !el.isCompleted } : el
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodo(todo.filter((el) => el.id !== id));
  };

  return (
    <div className={styles.app}>
      <h1 className={styles.todoTitle}>Todo</h1>
      <main className={styles.todoCard}>
        <div 
          className={styles.todoBanner} 
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className={styles.bannerText}>
            <span>Thur 9</span>
            <h2>6:23 AM</h2>
          </div>
        </div>
        <TodoInput onAdd={handleAddTodo} />
        <div className={styles.todoList}>
          {todo.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default TodoApp;