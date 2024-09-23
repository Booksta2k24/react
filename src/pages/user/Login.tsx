import InputField from "../../components/InputField";
import { flex_center, glassmorphism } from "../../style";

function Login() {
    return (
        <div className={`min-h-screen bg-primary ${flex_center} overflow-hidden relative md:p-10`}>
            <img src="/images/login-svg-bottom.svg" className="absolute -top-96 -left-96 z-0 max-w-[200%] sm:max-w-full" />
            <img src="/images/login-svg-bottom.svg" className="absolute -bottom-80 -right-80 z-0 rotate-180 max-w-[200%] sm:max-w-full" />

            <div className="w-full max-w-4xl h-[100vh] md:h-[85vh] shadow-custom relative z-10 flex flex-col-reverse md:flex-row overflow-hidden md:rounded-custom login-card">
                
                <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-6 md:p-10 lg:p-20 bg-primary rounded-t-custom lg:rounded-r-custom">
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

                    <form className="w-full space-y-4 lg:space-y-6">
                        <InputField
                            label="Email"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                        />
                        
                        <InputField
                            label="Password"
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            required
                        />

                        <button type="submit" className="w-full py-2 md:py-3 text-white bg-secondary rounded-md hover:bg-indigo-700 text-sm md:text-base">
                            Sign In
                        </button>
                    </form>
                </div>

                <div className={`flex-1 bg-[url('/images/login-bg.svg')] bg-cover bg-center text-center relative ${flex_center} flex md:hidden lg:flex`}>
                    <h1 className="text-white font-custom text-5xl sm:text-7xl lg:hidden">Writora</h1>

                    <div className={`rounded-custom ${glassmorphism} p-4 relative w-[70%] h-[70%] hidden lg:flex`}>
                        <img src="/images/login-women.svg" alt="login lady" className="absolute bottom-0 -right-7 max-w-full max-h-full object-contain size-[50rem]" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login