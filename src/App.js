import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/HomePage/Home/Home";
import Navigation from "./components/Shared/Navigation/Navigation";
import Login from "./components/LoginPage/Login/Login";
import Register from "./components/LoginPage/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/LoginPage/PrivateRoute/PrivateRoute";
import Dashboard from "./components/DashBoardPage/Dashboard/Dashboard";
import AddService from "./components/DashBoardPage/AddService/AddService";
import MakeAdmin from "./components/DashBoardPage/MakeAdmin/MakeAdmin";
import BookList from "./components/DashBoardPage/BookList/BookList";
import Review from "./components/DashBoardPage/Review/Review";
import ManageService from "./components/DashBoardPage/ManageService/ManageService";
import OrderList from "./components/DashBoardPage/OrderList/OrderList";
import Book from "./components/OtherPage/Book/Book";
import AdminRoute from "./components/LoginPage/AdminRoute/AdminRoute";
import NotFound from "./components/OtherPage/NotFound/NotFound";

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
          <Route path='/book/:serviceId' element={<PrivateRoute><Book/></PrivateRoute>}/>
          <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}>
            <Route path="/dashboard/addService" element={<AdminRoute><AddService/></AdminRoute>}/>
            <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin/></AdminRoute>}/>
            <Route path="/dashboard/BookList" element={<BookList/>}/>
            <Route path="/dashboard/review" element={<Review/>}/>
            <Route path="/dashboard/manage" element={<AdminRoute><ManageService/></AdminRoute>}/>
            <Route path="/dashboard/orderList" element={<AdminRoute><OrderList/></AdminRoute>}/>
          </Route>
         <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
