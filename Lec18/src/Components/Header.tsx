import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, toggleTheme }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>devfinder</h1>
      <button onClick={toggleTheme} className={styles.themeBtn}>
        {isDark ? 'LIGHT' : 'DARK'}
        <span className={styles.icon}>
          {isDark ? '☀️' : '🌙'}
        </span>
      </button>
    </header>
  );
};