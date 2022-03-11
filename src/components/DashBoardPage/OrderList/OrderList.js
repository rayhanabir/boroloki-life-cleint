import React, { useState, useEffect } from "react";
import {Table} from 'react-bootstrap';
import "./OrderList.css";

const OrderList = () => {
  const [allOrder, setAllOrder] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, []);
  return (
    <>
      <section id="all_order">
        <h3>order : {allOrder.length}</h3>
        <div className="order_container">
          <Table hover responsive>
            <thead>
              <tr>
                
                <th>Name</th>
                <th>Email</th>
                <th>Service Name</th>
                <th>Status</th>
              </tr>
            </thead>
            
             {
                 allOrder.map(order =><tbody key={order._id}>
                        <tr>
                            <td>{order.cutomerName}</td>
                            <td>{order.CustomerEmail}</td>
                            <td>{order.serviceName}</td>
                            <td>pending</td>
                        </tr>

                 </tbody>)
             }
           
          </Table>
        </div>
      </section>
    </>
  );
};

export default OrderList;
