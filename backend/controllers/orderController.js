const Order = require('../models/orderModel');

const createOrder = async (req, res) => {
  const { userId, orderItems, totalPrice } = req.body;

  try {
    const order = new Order({
      user: userId,
      orderItems,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('user', 'id email');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createOrder,
  getOrders,
};
