import express from 'express'

import { addToCart , updateCart , getUserCart } from '../controllers/cartController.js'
import authUser from '../middleware/Auth.js'

const cartRouter = express.Router()

cartRouter.post('/get',authUser,getUserCart)
cartRouter.post('/add',authUser,updateCart)
cartRouter.post('/update',authUser,addToCart)

export default cartRouter
