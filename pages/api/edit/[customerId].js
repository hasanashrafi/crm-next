import Customer from "@/models/Customer";
import connectDb from "@/utils/connectDB";

export default async function handler(req, res) {
    try {
        await connectDb()
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "failed",
            message: "Error to connecting to DB"
        })
        return;
    }

    if (req.method === "PATCH") {
        const id = req.query.customerId;
        const data = req.body.data;

        try {
            const customer = await Customer.findOne({ _id: id })
            customer.name = data.name
            customer.lastName = data.lastName
            customer.email = data.email
            customer.phone = data.phone
            customer.address = data.address
            customer.postcode = data.postcode
            customer.date = data.date
            customer.products = data.products
            customer.updatedAt = Date.now()
            customer.save()

            res.status(200).json({
                status: "success",
                message: "item edited",
                data: customer
            })
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: "failed",
                message: "Error in editing item"
            })
        }
    }
}