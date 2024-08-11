import express from "express"
import * as http from "http";
import config from "./config.js";

export const startServer = () => {
    const httpServer = express()
    const port = config.port
    try {
        httpServer.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    } catch (error) {
        throw new Error(error)
    }
}