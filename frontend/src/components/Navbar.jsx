import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#1f2937",
        color: "white",
        padding: "15px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Complaint Portal</h2>

      <div>
        <Link
          to="/login"
          style={{
            color: "white",
            marginRight: "10px",
            textDecoration: "none",
            border: "1px solid white",
            padding: "8px 15px",
            borderRadius: "5px",
          }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            backgroundColor: "#facc15",
            color: "black",
            textDecoration: "none",
            padding: "8px 15px",
            borderRadius: "5px",
          }}
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;