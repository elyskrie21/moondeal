import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation(); 

  if (!token) {
    return <Navigate to="/signin" replace state={{ from: location }}/>;
  }

  return children;
};

export const PublicRoute = ({ children }) => {
    const {token} = useAuth();
    
    if (token) {
        return <Navigate to={'/dashboard'} />
    }

    return children
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = React.useState(() => {
    return localStorage.getItem("token");
  });
  const navigate = useNavigate(); 
  const location = useLocation(); 

  const handleLogin = async (username, password) => {
    try {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      let urlencoded = new URLSearchParams();
      urlencoded.append("username", username);
      urlencoded.append("password", password);

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
      };

      let res = await fetch(
        "https://www.api.mymoondeal.com/api/signin",
        requestOptions
      );

      let resJson = await res.json();
      if (resJson.success) {
        localStorage.setItem("token", resJson.token);
        setToken(resJson.token);

        const origin = location.state?.from?.pathname || '/dashboard'; 
        navigate(origin)
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
    navigate('/signin'); 
  };

  const value = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
