import User from "./User"
import UserClass from "./UserClass"
import { useState } from "react"
import React from "react"
class About extends React.Component{
    constructor(props){
        super(props)
        console.log(" parent constructor")
    }
    componentDidMount(){
        //api call

    }
    render(){
        console.log(" parent render")
        return (
            <div>
            
                {/* <User  name={"shashank (function )"}/> */}
                <UserClass name={"shashank (class)"}/>
        
                <h2></h2>
            </div>
        )
    }
}

export default About