// src/routes/index.tsx
import React from 'react';

import { OpenRoutes } from './OpenRoutes';

import PrivateRoutes from './PrivateRoutes';

import { useAuth } from '../hooks/useAuth';




const AppRoutes: React.FC = () => {
    const { token } = useAuth();

    if (token) {

        return (
            <PrivateRoutes />
        )

    }

    return <OpenRoutes />;
};

export default AppRoutes;
