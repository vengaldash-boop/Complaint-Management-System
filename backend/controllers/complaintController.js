const Complaint = require("../models/Complaint");

// Create Complaint
const submitComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);

    res.status(201).json(complaint);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Complaints
const getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().sort({
      createdAt: -1,
    });

    res.status(200).json(complaints);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Resolve Complaint
const resolveComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      {
        status: "Resolved",
      },
      {
        new: true,
      }
    );

    res.status(200).json(complaint);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Complaint
const deleteComplaint = async (req, res) => {
  try {
    await Complaint.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Complaint Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  submitComplaint,
  getComplaints,
  resolveComplaint,
  deleteComplaint,
};