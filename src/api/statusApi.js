import axios from "../config/axios";

export const getAllStatus = async (checkpointsId) => {
    try {
        return await axios.get(`/status/${checkpointsId}`);
    } catch (err) {
        console.log(err.message);
    }
};
