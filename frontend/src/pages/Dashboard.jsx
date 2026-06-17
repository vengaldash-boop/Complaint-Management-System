import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [complaints, setComplaints] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    complaint: "",
    priority: "Low",
    userName: "",
    userEmail: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      navigate("/login");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      userName: user.name,
      userEmail: user.email,
    }));

    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5001/api/complaints"
      );

      setComplaints(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5001/api/complaints",
        formData
      );

      alert("Complaint Submitted Successfully");

      const user = JSON.parse(localStorage.getItem("user"));

      setFormData({
        title: "",
        category: "",
        location: "",
        complaint: "",
        priority: "Low",
        userName: user.name,
        userEmail: user.email,
      });

      fetchComplaints();
    } catch (err) {
      console.log(err);
      alert("Failed to submit complaint");
    }
  };
  const resolveComplaint = async (id) => {
  try {
    await axios.put(
      `http://localhost:5001/api/complaints/resolve/${id}`
    );

    alert("Complaint Resolved Successfully");

    fetchComplaints();

  } catch (err) {
    console.log(err);
    alert("Unable to resolve complaint");
  }
};

  const deleteComplaint = async (id) => {
    if (!window.confirm("Delete this complaint?")) return;

    try {
      await axios.delete(
        `http://localhost:5001/api/complaints/${id}`
      );

      alert("Complaint Deleted Successfully");

      fetchComplaints();
    } catch (err) {
      console.log(err);
      alert("Delete Failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const totalComplaints = complaints.length;

  const pendingComplaints = complaints.filter(
    (item) => item.status === "Pending"
  ).length;

  const resolvedComplaints = complaints.filter(
    (item) => item.status === "Resolved"
  ).length;

  const progressComplaints = complaints.filter(
    (item) => item.status === "In Progress"
  ).length;

  return (
    <div
  style={{
    padding: "30px",
    background: "#f4f7fc",
    minHeight: "100vh",
  }}
>
  <button
    onClick={logout}
    style={{
      float: "right",
      background: "#dc3545",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    Logout
  </button>

  <h1
    style={{
      textAlign: "center",
      color: "#0d6efd",
      marginBottom: "10px",
    }}
  >
    Online Complaint Management System
  </h1>

  <h3
    style={{
      textAlign: "center",
      color: "#555",
      marginBottom: "30px",
    }}
  >
    Welcome, {formData.userName}
  </h3>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "20px",
      marginBottom: "35px",
    }}
  >
    <div
      style={{
        background: "#0d6efd",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h2>{totalComplaints}</h2>
      <p>Total Complaints</p>
    </div>

    <div
      style={{
        background: "#ffc107",
        color: "black",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h2>{pendingComplaints}</h2>
      <p>Pending</p>
    </div>

    <div
      style={{
        background: "#17a2b8",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h2>{progressComplaints}</h2>
      <p>In Progress</p>
    </div>

    <div
      style={{
        background: "#28a745",
        color: "white",
        padding: "20px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h2>{resolvedComplaints}</h2>
      <p>Resolved</p>
    </div>
  </div>

  <div
    style={{
      background: "white",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    }}
  >
    <h2 style={{ textAlign: "center" }}>
      Submit Complaint
    </h2>

    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "15px",
      }}
    >
      <input
        type="text"
        name="title"
        placeholder="Complaint Title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        <option>Road</option>
        <option>Electricity</option>
        <option>Water Supply</option>
        <option>Garbage</option>
        <option>Internet</option>
        <option>Others</option>
      </select>

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <textarea
        name="complaint"
        placeholder="Complaint Description"
        value={formData.complaint}
        onChange={handleChange}
        required
        style={{
          gridColumn: "1 / span 2",
          height: "120px",
        }}
      />

      <button
        type="submit"
        style={{
          gridColumn: "1 / span 2",
          background: "#0d6efd",
          color: "white",
          padding: "12px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "18px",
        }}
      >
        Submit Complaint
      </button>
    </form>
  </div>
  <div
  style={{
    marginTop: "40px",
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  }}
>
  <h2
    style={{
      textAlign: "center",
      marginBottom: "20px",
      color: "#0d6efd",
    }}
  >
    Complaint History
  </h2>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
    }}
  >
    <thead>
      <tr
        style={{
          background: "#0d6efd",
          color: "white",
        }}
      >
        <th style={{ padding: "10px" }}>ID</th>
        <th style={{ padding: "10px" }}>Title</th>
        <th style={{ padding: "10px" }}>Category</th>
        <th style={{ padding: "10px" }}>Location</th>
        <th style={{ padding: "10px" }}>Complaint</th>
        <th style={{ padding: "10px" }}>Priority</th>
        <th style={{ padding: "10px" }}>Status</th>
        <th style={{ padding: "10px" }}>Action</th>
      </tr>
    </thead>

    <tbody>
      {complaints.length === 0 ? (
        <tr>
          <td
            colSpan="8"
            style={{
              textAlign: "center",
              padding: "20px",
            }}
          >
            No Complaints Found
          </td>
        </tr>
      ) : (
        complaints.map((item, index) => (
          <tr key={item._id}>
            <td
              style={{
                padding: "10px",
                textAlign: "center",
              }}
            >
              {index + 1}
            </td>

            <td style={{ padding: "10px" }}>
              {item.title}
            </td>

            <td style={{ padding: "10px" }}>
              {item.category}
            </td>

            <td style={{ padding: "10px" }}>
              {item.location}
            </td>

            <td style={{ padding: "10px" }}>
              {item.complaint}
            </td>

            <td style={{ padding: "10px" }}>
              {item.priority}
            </td>

            <td style={{ padding: "10px" }}>
              <span
                style={{
                  padding: "5px 12px",
                  borderRadius: "15px",
                  color: "white",
                  background:
                    item.status === "Resolved"
                      ? "#28a745"
                      : item.status === "In Progress"
                      ? "#17a2b8"
                      : "#dc3545",
                }}
              >
                {item.status}
              </span>
            </td>

            <td style={{ padding: "10px" }}>
  {item.status !== "Resolved" && (
    <button
      onClick={() => resolveComplaint(item._id)}
      style={{
        background: "#28a745",
        color: "white",
        border: "none",
        padding: "8px 15px",
        borderRadius: "6px",
        cursor: "pointer",
        marginRight: "10px",
      }}
    >
      Resolve
    </button>
  )}

  <button
    onClick={() => deleteComplaint(item._id)}
    style={{
      background: "#dc3545",
      color: "white",
      border: "none",
      padding: "8px 15px",
      borderRadius: "6px",
      cursor: "pointer",
    }}
  >
    Delete
  </button>
</td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>

</div>
);
}

export default Dashboard;