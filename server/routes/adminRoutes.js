import express from "express"

const router = express.Router()


router.get("/", (req, res) => {
    res.status(200).send("hello")
})

export default router