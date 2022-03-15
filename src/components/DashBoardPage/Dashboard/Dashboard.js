import React, { useEffect } from "react";
import {BsListCheck,BsFillPlusSquareFill,BsFillPersonPlusFill,BsListUl} from 'react-icons/bs'
import {FaCommentDots} from 'react-icons/fa'
import {AiOutlineRollback} from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'
import {GrServices} from 'react-icons/gr'
import { Col, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import style from "./Dashboard.module.css";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
    const {logOut, admin} = useAuth();

    useEffect(()=>{
      document.title = 'Dashboard | LuxuryLife'
    },[])
    
  return (
    <>
      <section id={style.dashboard}>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <aside>
                <NavLink to="/dashboard/BookList">
                  <span><BsListCheck/></span>
                  Booking
                </NavLink>
                <NavLink to="/dashboard/review">
                  <span><FaCommentDots/></span>
                  Review</NavLink>
                {admin &&<div>
                  <NavLink to="/dashboard/addService">
                    <span><BsFillPlusSquareFill/></span>
                    Add Service</NavLink>
                  <NavLink to="/dashboard/manage">
                    <span><GrServices/></span>
                    Manage Service</NavLink>
                  <NavLink to="/dashboard/makeAdmin">
                    <span><BsFillPersonPlusFill/></span>
                    Add Admin</NavLink>
                  <NavLink to="/dashboard/orderList">
                    <span><BsListUl/></span>
                    Order List</NavLink>  
                </div>}
                <NavLink to="/" onClick={logOut}>
                  <span><BiLogOut/></span>
                  LogOut</NavLink>
                <NavLink to="/">
                  <span><AiOutlineRollback/></span>
                  Back Home</NavLink>
              </aside>
            </Col>
            <Col lg={9} md={9} sm={12}>
              <Outlet />
            </Col>
          </Row>
      
      </section>
    </>
  );
};

export default Dashboard;
