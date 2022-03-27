import React, { useEffect, useState } from "react";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { isAuthenticated } from "./repository";
import {
  Home,
  SignIN,
  SignUp,
  Dashboard,
  Error,
} from "./components";


function App() {
  const [auth, setAuth] = useState(() => {
      const token = localStorage.getItem('token');
      return token != null; 
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIN />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={auth ? <Dashboard /> : <Navigate replace to="/signin" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
