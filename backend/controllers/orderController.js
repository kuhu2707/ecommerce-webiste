import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//cod
const placeOrder = async (req, res) => {
  // try {
  //   const { userId } = req.body;

  //   // Validate required fields (consider using a validation library)
  //   if (!userId) {
  //     return res.json({
  //       success: false,
  //       message: "Missing required field: userId",
  //     });
  //   } 

  //   // ... rest of your code
  // } catch (error) {
  //   console.error(error);
  //   res.json({
  //     success: false,
  //     message: "An error occurred. Please try again.",
  //   });
  // }

  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId, { cartData: {} })

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//stripe
const placeOrderStripe = async (req, res) => {};

//razorpay
const placeOrderRazorpay = async (req, res) => {};

//admin panel
const allOrders = async (req, res) => {

  try {
    const orders = await orderModel.find({})
    res.json({success:true,orders})

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }

};

//order data for frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body

    const orders = await orderModel.find({ userId })
    res.json({ success: true, orders })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }
};

//update order status from admin panel
const updateStatus = async (req, res) => {
      try {
        const{orderId , status} = req.body
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success:true, message:"Status Updated"})

      } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
      }

};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
