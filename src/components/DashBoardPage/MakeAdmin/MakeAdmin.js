import React, { useState } from 'react';
import {Alert} from 'react-bootstrap';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminsuccess, setAdminSuccess] = useState(false);
    const handleSubmit =(e)=>{
        e.preventDefault()
        const user ={email}
        fetch('http://localhost:5000/users/admin',{
            method:"PUT",
            body:JSON.stringify(user),
            headers:{
                "Content-type":"application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                setAdminSuccess(true)
            }
        })
    }
    return (
        <>
            <section id="add_admin">
                <div className="add_admin_area">
                    <div className="add_admin_box">
                        <form onSubmit={handleSubmit}>
                            <input type="text" onChange={e=>setEmail(e.target.value)} placeholder='Enter Email'/>
                            <button type='submit'>Add Admin</button>
                        </form>
                        {adminsuccess && <Alert variant='success' className='mt-4'>Admin Added Succesfully</Alert>}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MakeAdmin;