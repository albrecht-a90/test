import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';

const isAuthenticated = (): boolean => {
    return !!localStorage.getItem('authToken');
};

const ProtectedRoute: React.FC = () => {
    return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;