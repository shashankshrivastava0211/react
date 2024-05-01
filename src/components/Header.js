import { CDN_URL } from "../utils/constants"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header=()=>{
    let [buttonNameReact,setbuttonNameReact]=useState("login")
    const onlineStatus =useOnlineStatus()
    useEffect(()=>{
        console.log("useeffect used because my button state change as its in dependenc wrt that state ")

    },[buttonNameReact])//this will render everytime state change of buttoname react //test done
    return(
        <div className="flex justify-between shadow-lg">
            <div className="logo-container">
                <img className="w-56" src={CDN_URL}/>
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4 justify-between">
                    <li className="px-5">online status: {onlineStatus ? "🟩" :"🟥" } </li>
                    <li>
                        <Link to="/"> Home</Link></li>
                    <li className="px-5">
                        <Link to ="/about">About Us
                        </Link></li>
                    <li className="px-5">
                        <Link to="/contact">Contact Us
                        </Link>
                        </li>
                        <li>
                        <Link to="grocery"> Grocery</Link></li>
                    <li></li>
                    <li className="px-5">Cart</li>
                    
                    <button className="login" onClick={()=>{
                         buttonNameReact==="login" ? setbuttonNameReact("logout") : setbuttonNameReact("login")
                        
                    }}>{buttonNameReact}</button>
                </ul> 
            </div>
        </div>
    )
}
export default Header