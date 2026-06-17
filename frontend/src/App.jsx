import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Changepass from "./pages/Changepass";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/changepassword" element={<Changepass />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;