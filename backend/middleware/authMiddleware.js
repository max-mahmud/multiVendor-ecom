const jwt = require("jsonwebtoken");

module.exports.authMiddleware = async (req, res, next) => {
    const { accessToken } = req.cookies;
    if (!accessToken) {
        return res.status(409).json({ error: "Please Login with Access Token" });
    } else {
        try {
            const decodedToken = await jwt.verify(accessToken, process.env.SECRET);
            req.role = decodedToken.role;
            req.id = decodedToken.id;
            next();
        } catch (error) {
            return res
                .status(403)
                .json({ error: "you are not allowed to access this page" });
        }
    }
};
