import { useState, useEffect } from 'react';
import { Header } from './Components/Header';
import { SearchBar } from './Components/SearchBar';
import { UserCard } from './Components/UserCard';
import type { GitHubUser } from './Types';
import styles from './App.module.css';

function App() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    fetchUser('octocat');
  }, []);

  const fetchUser = async (username: string) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        setUser(null);
        setHasError(true);
        return;
      }
      const data: GitHubUser = await res.json();
      setUser(data);
      setHasError(false);
    } catch {
      setUser(null);
      setHasError(true);
    }
  };

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme ? 'dark' : 'light');
  };

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <SearchBar onSearch={fetchUser} hasError={hasError} />
        {user && <UserCard user={user} />}
      </div>
    </main>
  );
}

export default App;