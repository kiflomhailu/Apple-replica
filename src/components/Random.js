import React,{useEffect, useState} from 'react'

 function Random() {
    const[users, setUsers]=useState([]);

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=3")
        .then((res)=>res.json())
        .then((data)=>setUsers(data.results));

    },[]);

  return (
    <div>
{users.map((user,index)=>(
    <div key={index}>
    <h1>
        {user.name.title}
        {user.name.first} {user.name.last}
        </h1>
        <img src={user.picture.large} alt="user"/>
        <p>{user.email}</p>
        </div>
))}


    </div>
  )
 }

export default Random