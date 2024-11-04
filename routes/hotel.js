import express from 'express';

import hotelControllers from '../controllers/hotel.js';

const router = express.Router();

const {
    getAllHotels,
    getHotel,
    getUserHotels,
    createHotel,
    updateHotel,
    deleteHotel
} = hotelControllers;

// routes

router.get('/hotels', getAllHotels);
router.get('/hotels/:id', getHotel);
router.get('/hotels/user/:id', getUserHotels);
router.post('/hotels', createHotel);
router.put('/hotels/:id', updateHotel);
router.delete('/hotels/:id', deleteHotel);

export default router;
