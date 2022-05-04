const Room=require('../models/roomSchema');

exports.getallRooms= async (req, res, next) => {
    try {
        const rooms=await Room.find({});
        return res.json({rooms});
    } catch (error) {
        return res.status(400).json({message:error});
    }
}