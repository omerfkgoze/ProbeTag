const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      unique: true,
    },
    roomType: {
      type: String,
      required: [true, 'Please provide a type'],
      enum: ['basic', 'premium', 'suite'],
      default: 'basic',
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
    },
  },
  { timestamps: true }
);

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
