import React, { useState } from "react";
import "./dropdown.css"
import{IoIosArrowDown} from "react-icons/io"


export const Dropdown=({selected,setSelected})=>{

    const [isactive, setIsactive]=useState(false);

    const options=["Economy","Premium economy", "Business class","First class"]


    return <div className="dropdown">
        <div className="dropdown-btn" onClick={()=>{
            setIsactive(!isactive);
        }}>{selected}<IoIosArrowDown/></div>

        {isactive && ( <div className="dropdown-content">

            {options.map((option)=>(
                <div onClick={(e)=>{setSelected(option);
                    setIsactive(false)
                }} className="dropdown-item">{option}</div>
            ))}
        
           
        </div>)}
       
    </div>
}