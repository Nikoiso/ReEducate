import { type userCardProps } from "../interfaces";
import "./UserCard.css";

function UserCard({ user }: userCardProps) {
  return (
    <div className="user-card">
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
    </div>
  );
}

export default UserCard;
