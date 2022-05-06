import "./All_things.css"
import { Final_all_thing } from "./Final_all_things"
import { Sdata } from "./Sdata"
export const All_things=()=>{
    return(
        <div>
        <div className="Allthings"> All things to do</div>
        <div className="cardcontainer">
        {Sdata.map((val,index)=>{
            return(
                 
                <Final_all_thing
                    key={val.id}
                    title={val.title}
                    things={val.things}
                />
                
            
            )
        })}
        </div>
        
        </div>
    )
}