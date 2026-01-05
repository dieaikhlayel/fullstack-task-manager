import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Dashboard</h2>
      <p>Welcome, {user?.email || "User"}</p>
      <Link to="/tasks">Go to Tasks</Link><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;
