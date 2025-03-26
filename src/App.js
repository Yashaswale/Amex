import "./App.css"; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginModal from "./components/loginModal/loginmodal";  
import RegisterModal from "./components/loginModal/registermodal";
import Dashboard from "./components/dashboard";
import Home from "./components/toggeles/home";
import LiveWall from "./components/toggeles/livewall";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginModal />} />
        <Route path="/register" element={<RegisterModal />} />
        <Route path="/home" element={<Home />} />
        <Route path="/livewall" element={<LiveWall />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> 
    </Router>
  );
}

export default App;
