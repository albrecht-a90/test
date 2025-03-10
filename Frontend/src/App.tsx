import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Login from './pages/Login';
// import Register from "./pages/Register";

function App() {
    return (
        <RouterProvider router={router} />
        // <Router>
        //     <Routes>
        //         <Route path="/login" element={<Login/>}/>
        //         <Route path="/register" element={<Register/>}/>
        //         <Route path="/" element={<Login/>}/>
        //     </Routes>
        // </Router>
    );
}

export default App;