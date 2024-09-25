import { LoginData } from "./authForm"

export interface Response {
    data: {
        success: boolean,
        status: number,
        data: LoginData,
        message: string
    }
}