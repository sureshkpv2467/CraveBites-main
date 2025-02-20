import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder, verifyorder,userOrders, listOrders, updateStatus,placeOrderCod,updateReview } from "../controllers/orderController.js"

const orderRouter=express.Router();

orderRouter.post("/place",authMiddleware,placeOrder)
orderRouter.post("/verify",verifyorder)
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)
orderRouter.post("/placecod",authMiddleware,placeOrderCod);
orderRouter.post("/review", authMiddleware, updateReview);

export default orderRouter;