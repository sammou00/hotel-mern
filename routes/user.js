import express from 'express';

import userControllers from '../controllers/user.js';

const router = express.Router();

const { register, login, logout } = userControllers;

// routes

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

export default router;
