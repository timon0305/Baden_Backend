const express = require('express');
const router = express.Router();
const cors = require('cors');

/*---------------------------------------------------
|   Import pillReminder Control Methods
|----------------------------------------------------*/
const {
  getOfferById,
  setOfferPrice,
  getVehicleName,

  getReviews,
  createReview,
  requestBooking,
  cancelBooking,
  searchDoctorsByCategory,
  searchDoctors,

} = require('../Controllers/offerList');


const { registered } = require('../middleware/auth1');
const { uploadS3 } = require('../utils/aws');

router.route('/getOfferList')
  .get(registered, getOfferById);

router.route('/sentOffer')
    .post(registered, setOfferPrice)


router.route('/vehicleName')
  .get(registered, getVehicleName);

router.route('/:id/review')
  .get(registered, getReviews)
  .put(registered, createReview);

router.route('/:id/booking')
  .put(registered, requestBooking)
  .delete(registered, cancelBooking);

router.route('/searchDoctorsByCategory')
  .post(registered, searchDoctorsByCategory);

router.route('/searchDoctors')
  .post(registered, searchDoctors);

module.exports = router;
