import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// construct path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// load environment variables
dotenv.config({ path: path.join(PATH, '..', '.env') });

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_URI);
        console.log('Connected to the database successfully');
    } catch (err) {
        console.error(err);
    }
};

export default connectToDB;
