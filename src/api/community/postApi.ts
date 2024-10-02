import axios from "axios";

const BASE_URL = 'http://localhost:4000/api';

export const addPost = async(formData: FormData) => {
    try {
        const response = await axios.post(`${BASE_URL}/post`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Error while fetching post.");
    }
}

export const getPost = async() => {
    try {
        const response = await axios.get(`${BASE_URL}/post`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error("Error while fetching post.");
    }
}
