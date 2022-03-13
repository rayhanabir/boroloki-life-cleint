import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageService = () => {
  const [manageService, setManageService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setManageService(data));
  }, []);

  const handleServiceDelete =(id)=>{
      const confirm = window.confirm("are you sure you want to delete it?")
      if(confirm){
        const url = `http://localhost:5000/services/${id}`
      fetch(url,{
          method:"DELETE"
      })
      .then(res => res.json())
      .then(data => {
          if(data.deletedCount === 1){
              const remaining = manageService.filter(service => service._id !==id)
              setManageService(remaining);
          }
      })
      }
      

  }

  return (
    <>
      <section id="manage_service">
        <div className="p-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Service Price</th>
                <th>Actions</th>
              </tr>
            </thead>
                {
                    manageService.map(singleService =><tbody key={singleService._id}>
                            <tr>
                                <td>{singleService.name}</td>
                                <td>{singleService.price}</td>
                                <td><button className="btn btn-danger" onClick={()=>handleServiceDelete(singleService._id)}>DELETE</button></td>
                            </tr>
                    </tbody>)
                }
          </Table>
        </div>
      </section>
    </>
  );
};

export default ManageService;
