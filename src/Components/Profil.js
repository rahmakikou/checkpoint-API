import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Profil=()=>{
    const {id} = useParams()
    const [user,setUser] = useState({})
    useEffect(()=> {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data)) 
        .catch((err)=>console.log(err))
    },[])
    return(
        <div>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
                <h2>{user.city}</h2>

        </div>
    )
}

export default Profil 