const adminModel = require("../models/adminModel");
const sellerModel = require("../models/sellerModel");
const bcrpty = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2
const formidable = require('formidable')
const { responseReturn } = require("../utils/response");
const { createToken } = require("../utils/tokenCreate");
const sellerCustomerModel = require("../models/chat/sellerCustomerModel");
class authControllers {
    admin_login = async (req, res) => {
        const { email, password } = req.body
        try {
            const admin = await adminModel.findOne({ email }).select('+password')
            if (admin) {
                const match = await bcrpty.compare(password, admin.password)
                if (match) {
                    const token = await createToken({
                        id: admin.id,
                        role: admin.role
                    })
                    res.cookie('accessToken', token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                    })
                    responseReturn(res, 200, { token, message: 'Login success' })
                } else {
                    responseReturn(res, 404, { error: "Password wrong" })
                }
            } else {
                responseReturn(res, 404, { error: "Email not found" })
            }
        } catch (error) {
            responseReturn(res, 500, { error: error.message })
        }
    }


    seller_register = async (req, res) => {
        const { name, email, password } = req.body
        try {
            const alreadyRegistered = await sellerModel.findOne({ email })
            if (alreadyRegistered) {
                responseReturn(res, 500, { error: "User already registered" })
            } else {
                const seller = await sellerModel.create({
                    name,
                    email,
                    password: await bcrpty.hash(password, 10),
                    method: "menual",
                    shopInfo: {}
                })
                await sellerCustomerModel.create({
                    myId: seller.id,
                });
                const token = await createToken({ id: seller.id, role: seller.role });
                res.cookie('accessToken', token, {
                    expires: new Date(Date.now() + 7 * 60 * 60 * 24 * 1000),
                });
                responseReturn(res, 201, { token, message: "registered successfully" })
            }
        } catch (error) {
            responseReturn(res, 500, { error: "Internal Server Error" })
        }
    }

    seller_login = async (req, res) => {
        const { email, password } = req.body
        try {
            const seller = await sellerModel.findOne({ email }).select('+password')
            if (seller) {
                const match = await bcrpty.compare(password, seller.password)
                if (match) {
                    const token = await createToken({
                        id: seller.id,
                        role: seller.role
                    })
                    res.cookie('accessToken', token, {
                        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                    })
                    responseReturn(res, 200, { token, message: 'Login success' })
                } else {
                    responseReturn(res, 404, { error: "Password wrong" })
                }
            } else {
                responseReturn(res, 404, { error: "Email not found" })
            }
        } catch (error) {
            responseReturn(res, 500, { error: error.message })
        }
    }

    logout = async (req, res, next) => {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        });

        responseReturn(res, 200, { message: 'logout success' })
    }

    getUser = async (req, res, next) => {
        const { id, role } = req;
        try {
            if (role === "admin") {
                const user = await adminModel.findById(id)
                responseReturn(res, 200, { userInfo: user })
            } else {
                const seller = await sellerModel.findById(id)
                responseReturn(res, 200, { userInfo: seller })
            }
        } catch (error) {
            responseReturn(res, 500, { error: "Internal Server Error" })
        }
    }

    profile_image_upload = async (req, res) => {
        const { id } = req
        const form = formidable({ multiples: true })

        form.parse(req, async (err, _, files) => {
            cloudinary.config({
                cloud_name: process.env.cloud_name,
                api_key: process.env.api_key,
                api_secret: process.env.api_secret,
                secure: true
            })
            const { image } = files
            try {
                const result = await cloudinary.uploader.upload(image.filepath, { folder: 'profile' })
                if (result) {
                    await sellerModel.findByIdAndUpdate(id, {
                        image: result.url
                    })
                    const userInfo = await sellerModel.findById(id)
                    responseReturn(res, 201, { message: 'Profile image update success',userInfo })
                } else {
                    responseReturn(res, 404, { error: 'image upload failed' })
                }
            } catch (error) {
                console.log(error)
                responseReturn(res, 500, { error: error.message })
            }
        })
    }
}

module.exports = new authControllers();
