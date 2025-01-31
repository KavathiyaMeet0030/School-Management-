import token from "jsonwebtoken"

const auth = async (req, res, next) => {
    const token = req.header("Authorization")
    try {
        const data = token.split(" ")[1]
        if (data) {
            next();
        } else {
            res.status(401).send({ error: "Please valid token" })
        }
    } catch (e) {
        res.status(401).send({ error: "Unauthorised" })
    }
}
export default auth