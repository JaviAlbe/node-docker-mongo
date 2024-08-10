import express from "express"
import * as http from "http";

export const startServer = () => {
    const httpServer = express()

    try {
        httpServer.listen(3000, () => {
            console.log('Server running on port 3000')
        })
    } catch (error) {
        throw new Error(error)
    }
}