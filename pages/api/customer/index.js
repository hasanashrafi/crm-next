import Customer from "@/models/Customer";
import connectDb from "@/utils/connectDB";

export default async function handler(req, res) {

    try {
        await connectDb()
        // res.status(201).json({ status: "success", })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "failed",
            message: "Error to connecting to DB"
        })
        return;
    }

    if (req.method === "POST") {
        const data = req.body.data

        if (!data.name || !data.lastName || !data.email)
            return res
                .status(400)
                .json({
                    status: "failed",
                    message: "invalid data"
                })

        try {
            const customer = await Customer.create(data)
            res.status(201).json({
                status: "success",
                message: "Data created",
                data: customer,
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                status: "failed",
                message: "Error in storing data in DB"
            })
            return;
        }
    }

}