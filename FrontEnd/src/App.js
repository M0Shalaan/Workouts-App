import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigatey,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import Navbar from "./components/Navbar";




function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/Login" />}
            />
            <Route
              path="/Login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route path="/Signup" element={!user? <Signup />:<Navigate to="/"/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
