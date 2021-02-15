const express = require('express');
const bookingController = require('../controllers/BookingController');
const authController = require('../controllers/AuthController');

const router = express.Router();

router
  .route('/')
  .get(
    authController.protect,
    authController.restrictTo('admin'),
    bookingController.getAllBookings
  );

router
  .route('/')
  .post(authController.protect, bookingController.createBookingCash);

// router
//   .route('/checkout-session/:tourId&:date')
//   .get(authController.protect, bookingController.getCheckoutSession);

router
  .route('/my')
  .get(authController.protect, bookingController.getMyBoikings);

router
  .route('/my/:id')
  .delete(authController.protect, bookingController.deleteMyBooking);

module.exports = router;
