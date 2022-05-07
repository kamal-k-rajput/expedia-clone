import React from "react"
import ReactDOM from "react-dom"
import "./Final_things.css"
export const Final_all_thing=(props)=>{
    return(
          
         
         

        <div className="card">
           <p>{props.title}</p>
           <p classname="things_para">{props.things}</p>
        </div>
          
        
       
        
    )
}