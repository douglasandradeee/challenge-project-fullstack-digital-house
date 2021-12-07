const Estimate = require("../models")

const estimateController = {
    async createEstimate(req, res) {
        const { name, email, message } = req.body
        try {
            const estimate = await Estimate.create({
                name,
                email,
                message,
                createAt: new Date().toISOString(),
                updateAt: new Date().toISOString(),
            })
            return res.status(200).redirect("/#contact")
        } catch (err) {
            switch (err.message) {
                case value:

                    break;

                default:
                    break;
            }

        }
    }
}