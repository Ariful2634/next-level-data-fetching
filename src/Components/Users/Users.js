"use client"
import { useEffect, useState } from "react";


const Users = () => {

    const [users,setUser]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    return (
        <div>
            <h2>Total User: {users.length}</h2>
            {
                users.map(user=>(<div key={user.id} className="card w-[70%] mx-auto my-5 bg-gray-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{user.name}</h2>
                  <p>{user.email}</p>
                  
                </div>
              </div>))
            }
        </div>
    );
};

export default Users;