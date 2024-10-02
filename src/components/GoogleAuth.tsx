import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const loginWithGoogle = useGoogleLogin({
        onSuccess: async (credentialResponse) => {
            if (credentialResponse?.access_token) {
                try {
                    console.log('Google login successful', credentialResponse);
                    navigate('/');
                } catch (error) {
                    console.error('Error during Google Auth', error);
                }
            }
        },
        onError: () => {
            console.error('Google login failed');
        },
    });

    return (
        <div className='w-full'>
            <button
                className="flex items-center justify-center rounded-custom w-full py-2 bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                onClick={() => loginWithGoogle()}
            >
                <img
                    src="/images/google-icon.svg"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                />
                Continue with Google
            </button>
        </div>
    );
};

export default Login;