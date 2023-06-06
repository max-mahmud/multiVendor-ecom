const sellerModel = require("../../models/sellerModel");
const { responseReturn } = require("../../utils/response");

class sellerController {
    get_seller_request = async (req, res, next) => {
        const { page, searchValue, parPage } = req.query
        let skipPage = parseInt(parPage) * (parseInt(page) - 1)

        try {
            if (searchValue) {
                // const products = await sellerModel.find({
                //     $text: { $search: searchValue }, sellerId: id
                // }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })

                // const totalProduct = await sellerModel.find({
                //     $text: { $search: searchValue }, sellerId: id
                // }).countDocuments()
                // responseReturn(res, 200, { totalProduct, products })
            } else {
                const sellers = await sellerModel.find({ status: "pending" }).skip(skipPage).limit(parPage).sort({ createdAt: -1 })
                const totalSeller = await sellerModel.find({ status: "pending" }).countDocuments()
                responseReturn(res, 200, { sellers, totalSeller })
            }
        } catch (error) {

        }
    };

    get_seller = async (req, res) => {
        const { sellerId } = req.params
        try {
            const seller = await sellerModel.findById(sellerId)
            responseReturn(res, 200, { seller })
        } catch (error) {
            responseReturn(res, 200, { error: error.message })
        }

    }

    seller_status_update = async (req, res) => {
        const { sellerId, status } = req.body
        try {
            await sellerModel.findByIdAndUpdate(sellerId, {
                status
            })
            const seller = await sellerModel.findById(sellerId)
            responseReturn(res, 200, { seller, message: 'seller status update success' })
        } catch (error) {
            responseReturn(res, 500, { error: error.message })
        }
    }
}
module.exports = new sellerController()