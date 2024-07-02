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

    if (req.method === "DELETE") {
        const id = req.query.customerId

        try {
            await Customer.deleteOne({ _id: id })
            res.status(200).json({
                status: "success",
                message: "item deleted"
            })
        } catch (error) {
            console.log(error.message);
            res.status(500).json({
                status: "failed",
                message: "Error in deleting item"
            })
        }
    }




} 