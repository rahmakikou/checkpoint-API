
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ListUsers=()=>{
    const [users,setUsers] = useState([]) 
     

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data)) 
        .catch((err)=>console.log(err))
    },[])

    return (
        <div>
            <h1 style={{color:"blue", fontSize:"40px"}}>Checkpoint API </h1>
        <h2 style={{color:'violet', fontSize:'25px'}}> User List </h2> 
       
            { 
             users.map((el,i,t)=> <Link to={`/Profil/${el.id}`}> <h3 style={{fontSize:'15px', fontFamily:'fantasy', color:'blueviolet'}}>{el.name}</h3></Link>) 
            }
 
        </div>
    )
}

export default ListUsers 