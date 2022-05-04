const Complaint = require("../models/complaintSchema");

exports.complaints = async (req, res, next) => {
  try {
    const newComplaint = new Complaint(req.body);
    const complaint = await newComplaint.create(req.body);
    return res.status(200).json({ data: complaint });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

exports.getComplaints = async (req, res, next) => {
  try {
    const complaint = await Complaint.find().sort("roomNumber");
    return res.status(200).json({ data: complaint });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

exports.updateComplaint = async (req, res, next) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.query.complaintId,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    return res.status(201).json({ data: complaint });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

exports.getOneComplaint = async (req, res, next) => {
  try {
    const complaint = await Complaint.findById(req.params.complaintId);
    return res.status(200).json({ data: complaint });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

exports.deleteComplaint = async (req, res, next) => {
  try {
    const complaint = await Complaint.findByIdAndDelete(req.params.complaintId);
    return res.status(204).json({ data: complaint });
  } catch (error) {
    return res.status(404).json({ error });
  }
};
