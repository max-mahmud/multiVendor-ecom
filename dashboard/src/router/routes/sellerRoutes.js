import { lazy } from "react";

const SellerDashboard = lazy(() =>
    import("../../views/seller/SellerDashboard")
);
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const Payment = lazy(() => import("../../views/seller/Payment"));
const Order = lazy(() => import("../../views/seller/Order"));
const DiscountProduct = lazy(() =>
    import("../../views/seller/DiscountProduct")
);
const ChatSupport = lazy(() => import("../../views/seller/ChatSupport"));
const ChatCustomer = lazy(() => import("../../views/seller/ChatCustomer"));
const Products = lazy(() => import("../../views/seller/Products"));
const Profile = lazy(() => import("../../views/seller/Profile"));
const EditProduct = lazy(() => import("../../views/seller/EditProduct"));
const OrderDetails = lazy(() => import("../../views/seller/OrderDetails"));
const Pending = lazy(() => import("../../views/Pending"));
const Deactive = lazy(() => import("../../views/Deactive"));

const sellerRoutes = [
    {
        path: "/seller/account-pending",
        element: <Pending />,
        ability: "seller",
    },
    {
        path: "/seller/account-deactive",
        element: <Deactive />,
        ability: "seller",
    },
    {
        path: "/seller/dashboard",
        element: <SellerDashboard />,
        role: "seller",
        status: "active"
    },
    {
        path: "/seller/dashboard/add-product",
        element: <AddProduct />,
        role: "seller",
        status: "active"
    },
    {
        path: "/seller/dashboard/payments",
        element: <Payment />,
        role: "seller",
        status: "active"
    },
    {
        path: "/seller/dashboard/orders",
        element: <Order />,
        role: "seller",
        visibility: ["active", "deactive"],
    },
    {
        path: "/seller/dashboard/order/details/:orderId",
        element: <OrderDetails />,
        role: "seller",
        visibility: ["active", "deactive"],
    },
    {
        path: "/seller/dashboard/discount-products",
        element: <DiscountProduct />,
        role: "seller",
        status: "active"
    },
    {
        path: "/seller/dashboard/products",
        element: <Products />,
        role: "seller",
        status: "active"
    },
    {
        path: "/seller/dashboard/chat-support",
        element: <ChatSupport />,
        role: "seller",
        visibility: ["active", "deactive", "pending"],
    },
    {
        path: "/seller/dashboard/chat-customer",
        element: <ChatCustomer />,
        role: "seller",
        status: "active"
    },
    {
        path: "/seller/dashboard/chat-customer/:customerId",
        element: <ChatCustomer />,
        role: "seller",
        status: "active"
    },
    {
        path: "/seller/dashboard/edit-product/:productId",
        element: <EditProduct />,
        role: "seller",
        status: "active"
    },
    {
        path: "/seller/dashboard/profile",
        element: <Profile />,
        role: "seller",
        status: "active"
    },
];

export default sellerRoutes;
