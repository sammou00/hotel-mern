import Hotel from '../models/hotel.js';

const hotelControllers = {
    getAllHotels: async (req, res) => {
        try {
            const hotels = await Hotel.find();
            res.status(200).json(hotels);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getHotel: async (req, res) => {
        const { id } = req.params;

        try {
            const hotel = await Hotel.findOne({ _id: id });
            if (hotel) {
                return res.status(200).json(hotel);
            } else {
                return res.status(404).json({ msg: 'Hotel not found' });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    getUserHotels: async (req, res) => {
        const { id } = req.params;

        try {
            const hotels = await Hotel.find({ user_id: id });
            res.status(200).json(hotels);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    createHotel: async (req, res) => {
        const { name, category, description, price, image, user_id } = req.body;
        try {
            if (name && category && description && price && image && user_id) {
                const newHotel = new Hotel({
                    name,
                    category,
                    description,
                    price,
                    image,
                    user_id
                });

                await newHotel.save();
                res.status(201).json(newHotel);
            } else {
                return res.status(400).json({ msg: 'All fields are required' });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    updateHotel: async (req, res) => {
        const { id } = req.params;
        const { name, category, description, price, image } = req.body;
        try {
            if (name && category && description && price && image) {
                const updatedHotel = await Hotel.updateOne(
                    { _id: id },
                    {
                        name,
                        category,
                        description,
                        price,
                        image
                    }
                );

                if (updatedHotel.modifiedCount > 0) {
                    return res
                        .status(200)
                        .json({ msg: 'Hotel updated successfully' });
                } else {
                    return res.status(404).json({ msg: 'Hotel not found' });
                }
            } else {
                return res.status(400).json({ msg: 'All fields are required' });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    deleteHotel: async (req, res) => {
        const { id } = req.params;
        try {
            const deletedHotel = await Hotel.deleteOne({ _id: id });

            if (deletedHotel.deletedCount > 0) {
                return res
                    .status(200)
                    .json({ msg: 'Hotel deleted successfully' });
            } else {
                return res.status(404).json({ msg: 'Hotel not found' });
            }
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
};

export default hotelControllers;
