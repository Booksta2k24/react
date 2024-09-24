import Yup from 'yup';
import { LoginFormValues } from '../utils/validation/login';
import { SignupFormValues } from '../utils/validation/signup';

interface LoginData {
    email: string;
    password: string;
}

interface SignupData {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}

export interface InitialVal<T> {
    data: T;
}

// Define initial values for login and signup forms
export const loginInitialValues: InitialVal<LoginData> = {
    data: {
        email: "",
        password: "",
    },
};

export const signupInitialValues: InitialVal<SignupData> = {
    data: {
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    },
};

export interface AuthFormProps<T> {
    initialValues: InitialVal<T>;
    validationSchema: T extends LoginData 
        ? Yup.ObjectSchema<LoginFormValues> 
        : Yup.ObjectSchema<SignupFormValues>;
    onSubmit: (values: T) => void;
    formFields: Array<{ 
        label: string; 
        name: string; 
        type: string; 
        placeholder: string 
    }>;
    buttonText: string;
}
