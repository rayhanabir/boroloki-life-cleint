import React from "react";
import {faPlus,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet, useParams } from "react-router-dom";
import style from "./Dashboard.module.css";
import useAuth from "../../../hooks/useAuth";

const Dashboard = () => {
    const {logOut} = useAuth();
    const {serviceId} = useParams()
  return (
    <>
      <section id={style.dashboard}>
        <Container>
          <Row>
            <Col lg={3} md={3} sm={12}>
              <aside>
                <NavLink to="/dashboard/book/:serviceId">
                  <span>
                  <FontAwesomeIcon icon="fa-solid fa-plus" />
                  </span>
                  Book
                </NavLink>
                <NavLink to="/dashboard/BookList">BookList</NavLink>
                <NavLink to="/dashboard/review">Review</NavLink>
                <NavLink to="/dashboard/addService">Add Service</NavLink>
                <NavLink to="/dashboard/manage">Manage Service</NavLink>
                <NavLink to="/dashboard/makeAdmin">Add Admin</NavLink>
                <NavLink to="/dashboard/orderList">Order List</NavLink>
                <NavLink to="/" onClick={logOut}>LogOut</NavLink>
                <NavLink to="/">Back Home</NavLink>
              </aside>
            </Col>
            <Col lg={9} md={9} sm={12}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Dashboard;
