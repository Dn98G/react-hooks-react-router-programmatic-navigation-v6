import { Link } from "react-router-dom";

function UserCard({ user }) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <Link to={`/users/${user.id}`}>View Profile</Link>
    </div>
  );
}

export default UserCard;
