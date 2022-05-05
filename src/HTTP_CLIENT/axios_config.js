import axios from "axios";
import Static from "../Static/data.json"

export const AuthServer = axios.create({
    baseURL: Static.config.AuthServer,
    timeout: 5000,
})

export const MainServer = axios.create({
    baseURL: Static.config.MainServer,
    timeout: 5000,
})