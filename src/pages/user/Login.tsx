import { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import InputField from "../../components/InputField";
import { flex_center, glassmorphism } from "../../style";
import { loginValidation } from "../../utils/validation/login";


function Login() {
    const [rememberMe, setRememberMe] = useState(false);

    // Handle "Remember Me" checkbox separately
    function handleRememberMeChange(e: React.ChangeEvent<HTMLInputElement>) {
        setRememberMe(e.target.checked);
    }

    return (
        <div className={`min-h-screen bg-primary ${flex_center} overflow-hidden relative lg:p-10`}>
            <img src="/images/login-svg-bottom.svg" className="absolute -top-96 -left-96 z-0 max-w-[200%] sm:max-w-full" />
            <img src="/images/login-svg-bottom.svg" className="absolute -bottom-80 -right-80 z-0 rotate-180 max-w-[200%] sm:max-w-full" />

            <div className="w-full h-[100vh] md:h-[100vh] md:w-[100vw] lg:h-[85vh] lg:w-[55rem] shadow-custom relative z-10 flex flex-col-reverse md:flex-row overflow-hidden lg:rounded-custom login-card">
                
                <div className={`relative flex-1 flex flex-col items-center justify-center space-y-6 p-6 md:p-10 lg:p-20 bg-primary rounded-t-custom md:rounded-none lg:rounded-r-custom }`}>
                    
                    <h1 className="text-2xl md:text-3xl font-bold text-center">Time to explore</h1>

                    <button className="flex items-center justify-center w-full py-3 border-[1px] text-black rounded-[25px] text-sm md:text-base">
                        <img src="/images/google-icon.svg" alt="Google icon" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                        Continue with Google
                    </button>

                    <div className="flex items-center w-full">
                        <div className="border-b w-full"></div>
                        <span className="px-3 text-xs md:text-sm text-gray-500">or</span>
                        <div className="border-b w-full"></div>
                    </div>

                    {/* Formik form for handling login */}
                    <Formik
                        initialValues={{ email: "", password: "" }} 
                        validationSchema={loginValidation} 
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ handleChange, handleSubmit }) => (
                            <Form onSubmit={handleSubmit} className="w-full space-y-4 lg:space-y-6">
                                {/* Email field */}
                                <div>
                                    <InputField
                                        label="Email"
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm h-3" />
                                </div>
                                
                                {/* Password field */}
                                <div>
                                    <InputField
                                        label="Password"
                                        type="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        name="password"
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm h-3" />
                                </div>

                                {/* Remember Me checkbox and Forgot Password link */}
                                <div className="flex items-center justify-between">
                                    <label className="inline-flex items-center text-sm">
                                        <input 
                                            type="checkbox" 
                                            className="form-checkbox text-secondary mr-2" 
                                            checked={rememberMe}
                                            onChange={handleRememberMeChange}
                                        />
                                        Remember me
                                    </label>
                                    <a href="#" className="text-sm text-secondary hover:underline">Forgot password?</a>
                                </div>

                                <button type="submit" className="w-full py-2 md:py-3 text-white bg-secondary rounded-md hover:bg-indigo-700 text-sm md:text-base">
                                    Sign In
                                </button>
                            </Form>
                        )}
                    </Formik>

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
                        <span className="font-bold">SIGNUP</span>
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Login;
