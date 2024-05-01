import { useEffect, useState } from "react";

const User = (props) => {
    const [count, setCount] = useState(0);
    const [count2]=useState(1)

    // useEffect(()=>{
    //     setInterval(()=>{
    //         console.log("test")
    //     },1000)
    // })
    
    return (
        <div className="user-card">
            <h1 onMouseOver={() => setCount(count + 1)}>Count: {count}</h1>
            <h2>count;{count2}</h2>
            <h2>Name: {props.name}</h2>
            <h3>Indore</h3>
            <h4>Contact: @shashank.shrivastava1102@gmail.com</h4>
        </div>
    );
}

export default User;

