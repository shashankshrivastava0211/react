import { useEffect, useState } from "react";

//how to write
const useOnlineStatus=()=>{
    //check if online


    const[onlineStatus,setonlineStatus]=useState(true)
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlineStatus(false)
        })
        window.addEventListener("online",()=>{
            setonlineStatus(true);
        })

    },[]);
 

    
    //boolean info
    return onlineStatus
}

export default useOnlineStatus;