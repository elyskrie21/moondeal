import React from "react";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import {
  Home,
  SignIN,
  SignUp,
  Dashboard,
  Error,
} from "./components";


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIN />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
