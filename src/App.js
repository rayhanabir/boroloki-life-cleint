import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/HomePage/Home/Home";
import Navigation from "./components/Shared/Navigation/Navigation";
import Login from "./components/LoginPage/Login/Login";
import Register from "./components/LoginPage/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/LoginPage/PrivateRoute/PrivateRoute";
import Book from "./components/Others/Book/Book";

function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path='book' element={<PrivateRoute><Book/></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
