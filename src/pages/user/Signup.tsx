import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { userSignupApi } from "../../api/auth/signup";
import { AuthForm } from "../../components";
import { flex_center, glassmorphism } from "../../style";
import { SignupData, signupInitialValues } from "../../types/authForm";
import { signupValidation } from "../../utils/validation/signup";
import { signupFormFields } from "../../constants";

const Signup = () => {

    const mutationOptions: UseMutationOptions<SignupData, Error, SignupData> = {
        onSuccess: (data: SignupData) => {
            console.log("Signup successful:", data);
        },
        onError: (error: Error) => {
            console.error("Login failed:", error);
            alert("Login failed. Please check your credentials.");
        }
    };

    const mutation = useMutation<SignupData, Error, SignupData>({
        mutationFn: userSignupApi,
        ...mutationOptions
    });

    
    const handleSubmit = async (values: SignupData) => {
        mutation.mutate(values);
    };
    

    return (
        <div className={`min-h-screen bg-[#f4f4f4] ${flex_center} overflow-hidden relative lg:p-10`}>
            <img src="/images/login-svg-bottom.svg" className="absolute -top-96 -left-96 z-0 max-w-[200%] sm:max-w-full" />
            <img src="/images/login-svg-bottom.svg" className="absolute -bottom-80 -right-80 z-0 rotate-180 max-w-[200%] sm:max-w-full" />

            <div className="w-full h-[100vh] md:h-[100vh] md:w-[100vw] lg:h-[85vh] lg:w-[55rem] shadow-custom relative z-10 flex flex-col-reverse md:flex-row-reverse overflow-hidden lg:rounded-custom signup-card ">
                
                <div className={`relative flex-1 flex flex-col items-center justify-center space-y-6 p-6 md:p-10 lg:p-20 bg-primary rounded-t-custom md:rounded-none lg:rounded-l-custom }`}>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-center">Create your account</h1>

                    {/* Formik form for handling signup */}
                    <AuthForm 

                        initialValues={signupInitialValues}
                        validationSchema={signupValidation}
                        onSubmit={handleSubmit}
                        formFields={signupFormFields}
                        buttonText="Sign Up"
                    />

                    <p className="flex md:hidden text-xs text-secondary">
                        Already have an account? &nbsp;
                        <span className="font-bold">LOGIN</span>
                    </p>

                </div>

                {/* Image Container - Now on the left side */}
                <div className={`flex-1 bg-[url('/images/login-bg.svg')] bg-cover bg-center text-center relative ${flex_center} flex`}>
                    <h1 className="text-white font-custom text-5xl sm:text-7xl sm:hidden">Writora</h1>

                    <div className={`rounded-custom ${glassmorphism} p-4 relative w-[70%] h-[65%] hidden md:flex`}>
                        <h1 className="text-white font-custom text-5xl sm:text-[60px] absolute top-5 -left-8">Writora</h1>
                        <img 
                            src="/images/signup-man.png" 
                            alt="signup lady" 
                            className="absolute bottom-0 -left-16 object-cover max-w-none w-[170%] h-auto" 
                        />
                    </div>

                    <p className="hidden md:flex absolute bottom-3 text-xs text-white">
                        Already have an account? &nbsp;
                        <a href="/login" className="font-bold">LOGIN</a>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Signup;
