import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "./OrderList.css";

const OrderList = () => {
  const [allOrder, setAllOrder] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, []);

  const handleStatusChange = (id, status) =>{
    const modifiedOrders = [];
    allOrder.forEach(order =>{
      if(order._id === id){
        order.status = status;
      }
      modifiedOrders.push(order)
    })
    
  }

  const handleOrderDelete = (id) => {
    const confirm = window.confirm("Are You Sure you want to delete it ?");
    if (confirm) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const remaining = allOrder.filter((order) => order._id !== id);
            setAllOrder(remaining);
          }
        });
    }
  };
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
                <th>Action</th>
              </tr>
            </thead>

            {allOrder.map((order) => (
              <tbody key={order._id}>
                <tr>
                  <td>{order.cutomerName}</td>
                  <td>{order.CustomerEmail}</td>
                  <td>{order.serviceName}</td>
                  <td>
                    <select onChange={(e)=>handleStatusChange(order._id, e.target.value)}>
                      <option className='bg-white'>Pending</option>
                      <option className='bg-white'>Done</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleOrderDelete(order._id)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </section>
    </>
  );
};

export default OrderList;
