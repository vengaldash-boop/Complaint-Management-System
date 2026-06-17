import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    if (!email || !password) {
      alert("Please enter all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          email,
          password,
        }
      );

      alert(res.data.message);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid Email or Password");
    }
  };

  return (
    <div
      style={{
        background: "#f2f2f2",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "430px",
          background: "#fff",
          padding: "40px",
          borderRadius: "15px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "50px",
          }}
        >
          Login
        </h1>

        <label style={{ fontSize: "20px" }}>Email</label>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "10px",
            marginBottom: "25px",
            fontSize: "18px",
            border: "1px solid gray",
            borderRadius: "8px",
            boxSizing: "border-box",
          }}
        />

        <label style={{ fontSize: "20px" }}>Password</label>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "15px",
            marginTop: "10px",
            marginBottom: "35px",
            fontSize: "18px",
            border: "1px solid gray",
            borderRadius: "8px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={loginUser}
          style={{
            width: "100%",
            padding: "16px",
            background: "#4a7cff",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          LOGIN
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "25px",
            fontSize: "18px",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/register"
            style={{
              color: "#4a7cff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;