import { LoginData } from "../../types/authForm";
import axios from 'axios';

export const userLoginApi = async (data: LoginData): Promise<LoginData> => {
    try {
        const response = await axios.post(
            "https://authentication-yb86.onrender.com/api/user/login",
            data
        );
        console.log("API response:", response);

        if (response.status === 200) { 
            return response.data.data; 
        } else {
            throw new Error("Login failed with status: " + response.status);
        }
    } catch (error) {
        console.error("API call failed:", error);
        throw new Error("Login request failed.");
    }
};
