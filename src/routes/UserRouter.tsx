import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Login from '../pages/user/Login';
import Signup from '../pages/user/Signup';


function UserRouter() {

    useEffect(() => {
        document.title = "Writora - User";
    }, []);

    return (
        <Routes>
            {/* Define login route */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Fallback for unknown routes */}
            <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
    );
}

export default UserRouter;
