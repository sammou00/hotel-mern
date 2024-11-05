import Item from '../models/item.js';

const itemControllers = {
    getUserItems: async (req, res) => {
        const { id } = req.params;

        try {
            const items = await Item.find({ user_id: id });
            res.status(200).json(items);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    createItem: async (req, res) => {
        const { name, price, quantity, user_id, hotel_id } = req.body;

        try {
            const newItem = new Item({
                name,
                price,
                quantity,
                user_id,
                hotel_id
            });

            await newItem.save();

            res.status(201).json(newItem);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    updateItem: async (req, res) => {
        const { id } = req.params;
        const { name, price, quantity } = req.body;

        try {
            const updatedItem = await Item.updateOne(
                { _id: id },
                {
                    name,
                    price,
                    quantity
                }
            );

            if (updatedItem.modifiedCount > 0) {
                res.status(200).json({ msg: 'Item updated' });
            } else {
                res.status(400).json({ msg: 'Item not found' });
            }
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    },
    deleteItem: async (req, res) => {
        const { id } = req.params;

        try {
            const deletedItem = await Item.deleteOne({ _id: id });

            if (deletedItem.deletedCount > 0) {
                res.status(200).json({ msg: 'Item deleted' });
            } else {
                res.status(400).json({ msg: 'Item not found' });
            }
        } catch (err) {
            res.status(500).json({ msg: err.message });
        }
    }
};

export default itemControllers;
