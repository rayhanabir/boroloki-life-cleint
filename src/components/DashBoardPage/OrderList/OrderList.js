import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Preloader from "../../OtherPage/Preloader/Preloader";
import "./OrderList.css";

const OrderList = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setAllOrder(data));
  }, []);

  const handleStatusChange = (status, id) => {
    const orderStatus = { status };
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(orderStatus),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.status) return;
        fetch("http://localhost:5000/orders")
          .then((res) => res.json())
          .then((data) => setAllOrder(data));
      });
  };

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
      {allOrder.length ? (
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
                      <select
                        onChange={(e) =>
                          handleStatusChange(e.target.value, order._id)
                        }
                        defaultValue={order.status}
                        className={
                          order.status === "pending"
                            ? "bg-danger text-white "
                            : "bg-success text-white"
                        }
                      >
                        <option
                          disabled={order.status === "pending" && true}
                          value="pending"
                          className="text-white"
                        >
                          Pending
                        </option>
                        <option
                          disabled={order.status === "done" && true}
                          value="done"
                          className="text-white"
                        >
                          Done
                        </option>
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
      ) : (
        <Preloader />
      )}
    </>
  );
};

export default OrderList;

// const handleStatusChange = (id, status) => {
//   const modifiedOrders = [];
//   allOrder.forEach((order) => {
//     if (order._id === id) {
//       order.status = status;
//     }
//     modifiedOrders.push(order);
//   });
//   setAllOrder(modifiedOrders);

//   const modifiedStatus = { status };

//   fetch(`http://localhost:5000/orders/${id}`, {
//     method: "PUT",
//     body: JSON.stringify(modifiedStatus),
//     headers: {
//       "Content-type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// defaultValue={order.status}
// className={
//   order.status === "Pending"
//     ? "btn btn-warning"
//     : "btn btn-success"
// }
// onChange={(e) =>
//   handleStatusChange(order._id, e.target.value)
// }
