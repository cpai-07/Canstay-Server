const express = require("express");
const router = express.Router();

const complaintController = require("../controllers/ComplaintController");

router
  .route("/complaints")
  .post(complaintController.complaints)
  .get(complaintController.getComplaints);

router
  .route("/complaints/:complaintId")
  .patch(complaintController.updateComplaint)
  .get(complaintController.getOneComplaint)
  .delete(complaintController.deleteComplaint);
