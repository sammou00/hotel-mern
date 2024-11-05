import express from 'express';

import itemControllers from '../controllers/item.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

const { getUserItems, getHotelItems, createItem, updateItem, deleteItem } =
    itemControllers;

// routes
router.get('/items/user/:id', verifyToken, getUserItems);
router.get('/items/hotel/:id', verifyToken, getHotelItems);
router.post('/items', verifyToken, createItem);
router.put('/items/:id', verifyToken, updateItem);
router.delete('/items/:id', verifyToken, deleteItem);

export default router;
