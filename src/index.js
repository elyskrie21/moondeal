import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Home, SignIN, SignUp, Dashboard } from "./components";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/signin"
        element={<SignIN />}
      />
      <Route
        path="/signup"
        element={<SignUp />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
      <Route path="*" element={<p>Theres nothing here</p>} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
