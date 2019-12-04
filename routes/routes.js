const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const exploreController = require('../controllers/explore');
const reviewController = require('../controllers/review');
const loginController = require('../controllers/login');
const bookingController = require('../controllers/booking')





router.get('',  homeController.getP);
router.post('/flights', homeController.postP)
router.get('/flights', homeController.getF)

router.get('/explore',  exploreController.getP);
router.get('/explorer', exploreController.getF)

router.get('/review', reviewController.getP);
router.post('/review', reviewController.postP);
router.get('/success_response', reviewController.getR)

router.get('/login', loginController.getL);
router.post('/login', loginController.postL);
router.get('/sign-up', loginController.getS);
router.post('/sign-up', loginController.postP);

router.get('/', homeController.getP)

router.get('/confirmBooking1k93', bookingController.getb1);
router.get('/confirmBooking2x4f', bookingController.getb2);
router.get('/confirmBooking283n', bookingController.getb3);
router.post('/paymentconfirm_success', bookingController.getconfirm);




module.exports = router;



