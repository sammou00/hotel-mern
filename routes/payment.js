import express from 'express';

import paymentControllers from '../controllers/payment.js';

const router = express.Router();

const { makePayment } = paymentControllers;

// routes
router.post('/payment', makePayment);

export default router;
