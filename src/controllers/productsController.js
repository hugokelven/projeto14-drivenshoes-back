import db from "../db.js"

export default async function getProducts (req, res) {
    try {
        const products = await db.collection("products").find({}).toArray()
        res.send(products)
    } catch (e) {
        res.sendStatus(500)
    }
}