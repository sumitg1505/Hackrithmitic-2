import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import EqSolver from '../pages/EqSolver';

function WebRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/eqsolver" element={<EqSolver />} />
            </Routes>
        </BrowserRouter>
    );
}

export default WebRoutes;
