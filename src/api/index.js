import axios from "axios";

const axiosInst = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/",
});

export default axiosInst;
