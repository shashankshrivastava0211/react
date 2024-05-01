import { useEffect, useState } from "react"
import { MENU_API } from "./constants"

const useRestaurantMenu=(resID)=>{// contract of hook is what it takes as input and what as output
    //fetch data

    const [resInfo,setresInfo]=useState(null)
    useEffect(()=>{
        fetchData()

    },[])
    const fetchData =async ()=>{
        const data=await fetch(MENU_API + resID)
        const json =await data.json();
        setresInfo(json.data)
    }
    
    return resInfo

}

export default useRestaurantMenu