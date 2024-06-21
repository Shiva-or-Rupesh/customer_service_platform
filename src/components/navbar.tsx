import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import "./navbar.css"

export const Navbar =()=>{
    const[user] =useAuthState(auth)
const signUserOut = async ()=>{
    await signOut(auth);
}

    return(
        <div className="navbar">
            <div className="links">
                <Link to="/" className="link1">Home</Link>
                {
                    !user ? <Link to="/login" className="link2">Login</Link> : <Link to="/request">Request</Link>
                }
                
            </div>
            <div className="user">
            {user && (
                <>
                <img src={user?.photoURL || ""} width="20" height="20"/>
                <p>{user?.displayName}</p>
                
                <button onClick={signUserOut}>Log Out</button>
                </>
            )}
            </div>
        </div>
    )
 }