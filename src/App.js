import React from "react";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  SignIN,
  SignUp,
  Dashboard,
  Error,
  AuthProvider,
  ProtectedRoute,
  PublicRoute,
} from "./components";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <SignIN />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUp />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
