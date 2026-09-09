import React from 'react';
import type { GitHubUser } from '../Types';
import styles from './UserCard.module.css';

interface UserCardProps {
  user: GitHubUser;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return `Joined ${day} ${month} ${year}`;
  };

  return (
    <div className={styles.card}>
      <div className={styles.avatarContainer}>
        <img src={user.avatar_url} alt={user.login} className={styles.avatar} />
      </div>

      <div className={styles.content}>
        <div className={styles.headerInfo}>
          <div>
            <h2 className={styles.name}>{user.name || user.login}</h2>
            <a href={`https://github.com/${user.login}`} target="_blank" rel="noreferrer" className={styles.username}>
              @{user.login}
            </a>
          </div>
          <p className={styles.date}>{formatDate(user.created_at)}</p>
        </div>

        <p className={`${styles.bio} ${!user.bio ? styles.notAvailable : ''}`}>
          {user.bio || 'This profile has no bio'}
        </p>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <h4>Repos</h4>
            <p>{user.public_repos}</p>
          </div>
          <div className={styles.statItem}>
            <h4>Followers</h4>
            <p>{user.followers}</p>
          </div>
          <div className={styles.statItem}>
            <h4>Following</h4>
            <p>{user.following}</p>
          </div>
        </div>

        <div className={styles.links}>
          <div className={`${styles.linkItem} ${!user.location ? styles.disabled : ''}`}>
            <span>📍</span>
            <p>{user.location || 'Not Available'}</p>
          </div>
          <div className={`${styles.linkItem} ${!user.blog ? styles.disabled : ''}`}>
            <span>🔗</span>
            {user.blog ? (
              <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noreferrer">
                {user.blog}
              </a>
            ) : (
              <p>Not Available</p>
            )}
          </div>
          <div className={`${styles.linkItem} ${!user.twitter_username ? styles.disabled : ''}`}>
            <span>🐦</span>
            <p>{user.twitter_username || 'Not Available'}</p>
          </div>
          <div className={`${styles.linkItem} ${!user.company ? styles.disabled : ''}`}>
            <span>🏢</span>
            <p>{user.company || 'Not Available'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};