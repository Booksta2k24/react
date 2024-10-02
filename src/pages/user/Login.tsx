import { flex_center, glassmorphism } from "../../style";
import { loginValidation } from "../../utils/validation/login";
import { LoginData, loginInitialValues } from "../../types/authForm";
import { userLoginApi } from "../../api/auth/login";
import { AuthForm } from "../../components";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { loginFormFields } from "../../constants";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/user/userSlice";
import GoogleAuthButton from "../../components/GoogleAuth";



const Login = () => {
    const dispatch = useDispatch();

    const mutationOptions: UseMutationOptions<LoginData, Error, LoginData> = {
        onSuccess: (data: LoginData) => {
            console.log("Login successful:", data);
            dispatch(setUser(data));
            alert("data stored to redux...")
        },
        onError: (error: Error) => {
            console.error("Login failed:", error);
            alert("Login failed. Please check your credentials.");
        }
    };

    const mutation = useMutation<LoginData, Error, LoginData>({
        mutationFn: userLoginApi,
        ...mutationOptions
    });

    
    const handleSubmit = async (values: LoginData) => {
        mutation.mutate(values);
    };
    
    
    return (
        <div className={`min-h-screen bg-[#f4f4f4] ${flex_center} overflow-hidden relative lg:p-10`}>
            <img src="/images/login-svg-bottom.svg" className="absolute -top-96 -left-96 z-0 max-w-[200%] sm:max-w-full" />
            <img src="/images/login-svg-bottom.svg" className="absolute -bottom-80 -right-80 z-0 rotate-180 max-w-[200%] sm:max-w-full" />

            <div className="w-full h-[100vh] md:h-[100vh] md:w-[100vw] lg:h-[85vh] lg:w-[55rem] shadow-custom relative z-10 flex flex-col-reverse md:flex-row overflow-hidden lg:rounded-custom login-card">
                
                <div className={`relative flex-1 flex flex-col items-center justify-center space-y-6 p-6 md:p-10 lg:p-20 bg-primary rounded-t-custom md:rounded-none lg:rounded-r-custom }`}>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-center">Time to explore</h1>

                    <GoogleAuthButton />

                    <div className="flex items-center w-full">
                        <div className="border-b w-full"></div>
                        <span className="px-3 text-xs md:text-sm text-gray-500">or</span>
                        <div className="border-b w-full"></div>
                    </div>

                    {/* Formik form for handling login */}
                    <AuthForm 
                        initialValues={loginInitialValues}
                        validationSchema={loginValidation}
                        onSubmit={handleSubmit}
                        formFields={loginFormFields}
                        buttonText="Sign In"
                    />

                    <p className="flex md:hidden text-xs text-secondary">
                        Don't have an account? &nbsp;
                        <span className="font-bold">SIGNUP</span>
                    </p>

                </div>

            <div className={`flex-1 bg-[url('/images/login-bg.svg')] bg-cover bg-center text-center relative ${flex_center} flex}`}>
                <h1 className="text-white font-custom text-5xl sm:text-7xl sm:hidden">Writora</h1>

                    <div className={`rounded-custom ${glassmorphism} p-4 relative w-[70%] h-[70%] hidden md:flex`}>
                        <h1 className="text-white font-custom text-5xl sm:text-[60px] absolute top-5 -left-8">Writora</h1>
                        <img 
                            src="/images/login-women.png" 
                            alt="login lady" 
                            className="absolute bottom-0 -right-28 object-cover max-w-none w-[200%] h-auto" 
                        />
                    </div>

                    <p className="hidden md:flex absolute bottom-3 text-xs text-white">
                        Don't have an account? &nbsp;
                        <a href="/signup" className="font-bold">SIGNUP</a>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Login;
