import React, { useState } from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (username: string) => void;
  hasError: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, hasError }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchBar}>
      <span className={styles.searchIcon}>🔍</span>
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={styles.input}
      />
      {hasError && <span className={styles.error}>No results</span>}
      <button type="submit" className={styles.searchBtn}>Search</button>
    </form>
  );
};