import { model, models, Schema } from "mongoose";

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
    },
    email: {
        type: String,
        required: true,
        minLength: 3,
    },
    phone: {
        type: String,
        required: true,
        minLength: 11,
    },
    address: {
        type: String,
        
    },
    postcode: {
        type: Number,
        
    },
    date: {
        type: Date
    },
    products: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    },
})

const Customer = models.Customer || model("Customer",customerSchema)

export default Customer