import {createBrowserRouter, RouteObject} from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProtectedRoute from './ProtectedRoute';
import Home from '../pages/Home';

const routes: RouteObject[] = [
    {
        path: '/login',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    },
    {
        path: '/',
        element: <ProtectedRoute/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },]
    },
];

const router = createBrowserRouter(routes);

export default router;