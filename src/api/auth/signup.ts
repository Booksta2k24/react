import axios from 'axios';
import { SignupData } from '../../types/authForm';

export const userSignupApi = async (data: SignupData): Promise<SignupData> => {
    try {
        console.log("Sending login data:", data);
        const response = await axios.post(
            "https://authentication-yb86.onrender.com/api/user/signup",
            data
        );
        console.log("API response:", response);
        
        if (response.status === 200) {
            return response.data; 
        } else {
            throw new Error("Signup failed with status: " + response.status);
        }
    } catch (error) {
        console.error("API call failed:", error);
        throw new Error
    }
};
