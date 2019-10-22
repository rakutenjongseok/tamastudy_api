const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Please add a course title'],
      maxlength: 100,
    },
    text: {
      type: String,
      required: [true, 'Please add a text'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 10,
      required: [true, 'Please rating between 1 and 10'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    bootcamp: {
      type: mongoose.Schema.ObjectId,
      ref: 'Bootcamp',
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: true,
    },
  },

  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Review', ReviewSchema);