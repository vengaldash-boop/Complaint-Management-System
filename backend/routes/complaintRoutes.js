const express = require("express");

const router = express.Router();

const {
  submitComplaint,
  getComplaints,
  resolveComplaint,
  deleteComplaint,
} = require("../controllers/complaintController");

// Submit Complaint
router.post("/", submitComplaint);

// Get All Complaints
router.get("/", getComplaints);

// Resolve Complaint
router.put("/resolve/:id", resolveComplaint);

// Delete Complaint
router.delete("/:id", deleteComplaint);

module.exports = router;