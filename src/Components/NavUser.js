import { Link } from "react-router-dom"

const NavUser =({auth, setAuth})=>{
    return(
        <div>
             <ul>
               <Link to='/'><li>Home</li></Link> 
              
              {
                auth ? 
                <>
                <Link to='/ListUsers'><li>Users</li></Link> 
                <br/> 
              <button onClick={()=>setAuth(false)}>Logout</button>
              </>
              :
              <button onClick={()=>setAuth(true)}>Log in</button>
              }

               
             </ul>
        </div>
    )
}

export default NavUser 