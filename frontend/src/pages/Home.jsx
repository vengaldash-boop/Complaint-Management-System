import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #eef5ff, #dfefff)",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "720px",
          background: "#ffffff",
          padding: "60px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 15px 35px rgba(0,0,0,0.18)",
        }}
      >
        {/* Icon */}
        <div
          style={{
            fontSize: "65px",
            marginBottom: "15px",
          }}
        >
          📋
        </div>

        {/* Title */}
        <h1
          style={{
            color: "#0D47A1",
            fontSize: "48px",
            fontWeight: "bold",
            lineHeight: "1.2",
            marginBottom: "20px",
          }}
        >
          Complaint
          <br />
          Management System
        </h1>

        {/* Subtitle */}
        <h2
          style={{
            color: "#555",
            fontSize: "24px",
            fontWeight: "500",
            marginBottom: "30px",
          }}
        >
          Submit, Track & Manage Complaints Efficiently
        </h2>

        {/* Description */}
        <p
          style={{
            color: "#666",
            fontSize: "19px",
            lineHeight: "36px",
            marginBottom: "45px",
          }}
        >
          👤 Register your account securely,
          <br />
          submit complaints in a few clicks,
          <br />
          track complaint status in real time,
          <br />
          and receive quick updates.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          <Link to="/login">
            <button
              style={{
                backgroundColor: "#1976D2",
                color: "#fff",
                border: "none",
                width: "200px",
                height: "55px",
                borderRadius: "12px",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              🔐 Login
            </button>
          </Link>

          <Link to="/register">
            <button
              style={{
                backgroundColor: "#2E7D32",
                color: "#fff",
                border: "none",
                width: "200px",
                height: "55px",
                borderRadius: "12px",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.05)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              📝 Register
            </button>
          </Link>
        </div>

        {/* Footer */}
        <hr
          style={{
            marginTop: "50px",
            border: "1px solid #ddd",
          }}
        />

        <p
          style={{
            marginTop: "20px",
            color: "#555",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          ©️ 2026 | Developed by{" "}
          <span style={{ color: "#0D47A1" }}>Harini</span>
        </p>
      </div>
    </div>
  );
}

export default Home;