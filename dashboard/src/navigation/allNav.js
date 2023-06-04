import { MdDashboard, MdShoppingCart, MdCategory,MdPayments, MdProductionQuantityLimits, MdDiscount} from "react-icons/md";
import { ImUserCheck, ImUserMinus } from "react-icons/im";
import { TbGitPullRequestDraft } from "react-icons/tb";
import { BiAddToQueue } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
import { RiChatPollLine, RiChatPollFill } from "react-icons/ri";

export const allNav = [
    {
        id:1,
        title:"Dashboard",
        icon:<MdDashboard />,
        role:"admin",
        path:"/admin/dashboard"
    },
    {
        id:2,
        title:"Orders",
        icon:<MdShoppingCart />,
        role:"admin",
        path:"/admin/dashboard/orders"
    },
    {
        id:3,
        title:"Category",
        icon:<MdCategory />,
        role:"admin",
        path:"/admin/dashboard/category"
    },
    {
        id:4,
        title:"Sellers",
        icon:<ImUserCheck />,
        role:"admin",
        path:"/admin/dashboard/sellers"
    },
    {
        id:5,
        title:"Payment Request",
        icon:<MdPayments />,
        role:"admin",
        path:"/admin/dashboard/payment-request"
    },
    {
        id:6,
        title:"Deactive Sellers",
        icon:<ImUserMinus />,
        role:"admin",
        path:"/admin/dashboard/deactive-sellers"
    },
    {
        id:7,
        title:"Sellers Request",
        icon:<TbGitPullRequestDraft />,
        role:"admin",
        path:"/admin/dashboard/sellers-request"
    },
    {
        id:8,
        title:"Chat Seller",
        icon:<BsFillChatLeftDotsFill />,
        role:"admin",
        path:"/admin/dashboard/chat-sellers"
    },
    {
        id:9,
        title:"Dashboard",
        icon:<MdDashboard />,
        role:"seller",
        path:"/seller/dashboard"
    },
    {
        id:10,
        title:"Add Product",
        icon:<BiAddToQueue/>,
        role:"seller",
        path:"/seller/dashboard/add-product"
    },
    {
        id:11,
        title:"All Product",
        icon:<MdProductionQuantityLimits />,
        role:"seller",
        path:"/seller/dashboard/products"
    },
    {
        id:12,
        title:"Discount Product",
        icon:<MdDiscount />,
        role:"seller",
        path:"/seller/dashboard/discount-products"
    },
    {
        id:13,
        title:"Orders",
        icon:<MdShoppingCart />,
        role:"seller",
        path:"/seller/dashboard/orders"
    },
    {
        id:14,
        title:"Payments",
        icon:<MdPayments />,
        role:"seller",
        path:"/seller/dashboard/payments"
    },
    {
        id:15,
        title:"Chat Customer",
        icon:<RiChatPollLine />,
        role:"seller",
        path:"/seller/dashboard/chat-customer"
    },
    {
        id:16,
        title:"Chat Support",
        icon:<RiChatPollFill />,
        role:"seller",
        path:"/seller/dashboard/chat-support"
    },
    {
        id:16,
        title:"Profile",
        icon:<CgProfile />,
        role:"seller",
        path:"/seller/dashboard/profile"
    },
]