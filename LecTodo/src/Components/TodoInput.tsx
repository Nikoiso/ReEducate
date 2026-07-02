import { useState } from "react";
import styles from "./TodoInput.module.css";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

function TodoInput({ onAdd }: TodoInputProps) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        className={styles.todoInputField}
        placeholder="Note"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className={styles.addButton}
        onClick={() => {
          if (inputValue.trim()) {
            onAdd(inputValue);
            setInputValue(""); // ინპუტის გასუფთავება
          }
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;