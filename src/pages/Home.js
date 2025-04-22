import UserCard from "../components/UserCard";

function Home() {
  const users = [
    { id: 1, name: "Alice Doe", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
  ];

  return (
    <div>
      <h1>Home</h1>
      <p>Click on a user to view their profile:</p>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Home;
