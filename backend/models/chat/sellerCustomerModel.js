const { Schema, model } = require("mongoose");

const selllerCustomerSchema = new Schema({
    myId :{
        type: String,
        required: true,
    },
    myFriend:{
        type: Array,
        default:[],
    }
},{timestamps: true});

module.exports = model("seller_customer", selllerCustomerSchema);
