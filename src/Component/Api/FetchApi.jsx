import axios from "axios";

const BaseUrl="http://127.0.0.1:3002"

export const getAbout=async()=>{
    try {
        return await axios.get(`${BaseUrl}/about`)
    }
    catch (error) {
        console.log("Error while fetching data from the Api", error.message);
    }
}

export const getTrainer=async()=>{
    try {
        return await axios.get(`${BaseUrl}/trainer`)
    }
    catch (error) {
        console.log("Error while fetching data from the Api", error.message);
    }
}