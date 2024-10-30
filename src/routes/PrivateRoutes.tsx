// src/components/PrivateRoute.tsx
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/home/Home';



const PrivateRoute: React.FC = () => {
    return (

        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
        </Routes>


    )
};

export default PrivateRoute;
