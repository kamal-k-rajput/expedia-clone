import "./header.css"
import WarningIcon from '@material-ui/icons/Warning';



export const Header=()=>{
    return(
        <div className="Header">
        <div className="Inside_Header">
        <div className="logo"> <WarningIcon/></div>
        <div>Check COVID-19 restrictions.</div>

        </div>
           <div className="iidiv">
               <div>Find Out More</div>
               <div>Dismiss</div>
           </div>
    

         </div>
    )
}
