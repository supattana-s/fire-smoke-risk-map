import axios from "../config/axios";

export const getAllStatus = async () => {
    try {
        return await axios.get("/status");
    } catch (err) {
        console.log(err);
    }
};

export const getAllStatusById = async (checkpointsId) => {
    try {
        return await axios.get(`/status/${checkpointsId}`);
    } catch (err) {
        console.log(err.message);
    }
};

export const updateStatus = async (payload) => {
    try {
        await axios.patch("/status", { updatingStatus: payload });
    } catch (err) {
        console.log(err);
    }
};
