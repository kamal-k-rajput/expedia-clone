import axios from "axios"
import { useEffect, useState } from "react"
import MediaCard from "./City_Information_Card"
import "./CityInformation.css"

export const CityInformation=()=>{
    const[array,setArray]=useState([])
    const[data,setData]=useState([])

   // const API= "http://188.166.98.109:5000/hotel"
    useEffect(()=>{
        getData()
    },[])

    const getData=()=>{
        axios.get(`http://188.166.98.109:5000/things`).then(res=>{
            setData(res.data)
            console.log(data)
        })
    }
    return(
        <div>
            
            <div className="cities_card">{data.map((item,index)=>{
                return(
                    <MediaCard
                        id={item._id}
                        img={item.etc1}
                       name={item.name}
                        time={item.time}
                        rating={item.rating}
                        rnumber={item.rnumber}
                        price={item.price}
                        cancel={item.cancel}
                        ptravel={item.ptravel}
                        lprice={item.lprice}
                        
                    />
                )
            })}</div>
        </div>
    )
}