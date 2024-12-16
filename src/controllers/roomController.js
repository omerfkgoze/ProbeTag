const asyncHandler = require('express-async-handler');
const Room = require('../models/roomModel');

// get all rooms
const getAllRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find({});

  res.status(200).json(rooms);
});

// get single room
const getRoom = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);

  if (!room) {
    res.status(404);
    throw new Error('Room not found');
  }

  res.status(200).json(room);
});

// create room
const createRoom = asyncHandler(async (req, res) => {
  const { name, price, roomType } = req.body;

  if (!name || !price) {
    res.status(400);
    throw new Error('Please fill all the fields!');
  }

  const room = await Room.create({
    name,
    price,
    roomType,
  });

  res.status(201).json(room);
});

// update room
const updateRoom = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);

  if (!room) {
    res.status(404);
    throw new Error('Room not found');
  }

  const { name, price, roomType } = req.body;

  if (!name || !price) {
    res.status(400);
    throw new Error('Please fill all the fields!');
  }

  room.name = name;
  room.price = price;
  room.roomType = roomType;

  const updatedRoom = await room.save();

  res.status(200).json(updatedRoom);
});

// delete room
const deleteRoom = asyncHandler(async (req, res) => {
  const room = await Room.findById(req.params.id);

  if (!room) {
    res.status(404);
    throw new Error('Room not found');
  }

  await Room.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: 'Room removed' });
});

module.exports = { getAllRooms, getRoom, createRoom, updateRoom, deleteRoom };
