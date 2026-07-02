import { type Todo } from "../items";
import styles from "./TodoItem.module.css";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className={`${styles.todoItem} ${todo.isCompleted ? styles.completed : ""}`}>
      <div className={styles.itemDetails}>
        <h3>{todo.title}</h3>
        <p>{todo.time}</p>
      </div>
      <div className={styles.itemActions}>
        <button
          className={`${styles.toggleButton} ${todo.isCompleted ? styles.active : ""}`}
          onClick={() => onToggle(todo.id)}
        >
          <span className={styles.circle}>
            {todo.isCompleted && (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </span>
        </button>
        <button className={styles.deleteButton} onClick={() => onDelete(todo.id)}>
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" className={styles.trashSvg}>
            <path d="M3 16C3 17.1 3.9 18 5 18H11C12.1 18 13 17.1 13 16V4H3V16ZM14 1H10.5L9.5 0H6.5L5.5 1H2V3H14V1Z" fill="#FF4D4F"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;