const express = require("express");
const router=express.Router();

const roomController = require("../controllers/RoomController");

 router.get("/getallrooms",roomController.getallRooms);

 module.exports=router;