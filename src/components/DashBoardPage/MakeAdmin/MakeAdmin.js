import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

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
        .then(data => console.log(data))
    }
    return (
        <>
            <section id="add_admin">
                <div className="add_admin_area">
                    <div className="add_admin_box">
                        <form onSubmit={handleSubmit}>
                            <input type="text" onBlur={e=>setEmail(e.target.value)} placeholder='Enter Email'/>
                            <button type='submit'>Add Admin</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MakeAdmin;