import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "./pages/Authpage";
import Home from "./pages/home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";


const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:type" element={<AuthForm/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
        
        

      </Routes>
      
    </Router>
  );
};

export default App;
