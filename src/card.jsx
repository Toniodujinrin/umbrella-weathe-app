import {Sky,TempAvr,TempMax,TempMin} from "./common/icons";
import React,{useState,useEffect} from "react";
import axios from "axios";
const Card = ({country,tempMax,tempMin,humidity,temp,weather,name}) => {

  
    return ( 
        <React.Fragment>
    <div className="card" id="card">
    <div className="card-pic">
    <img src={`https://countryflagsapi.com/png/${country}`} className="card-image-top" alt="..."/>
    </div>
    
    <div className="card-body">
    <h3 className="cardTitle">{`${name},${country}`}</h3>
    <div className="card-text">
        <div id="weather">{weather}</div>
        <div className="temperature">
        <div><p>Temperature</p> </div>
         
         <div id="temperatures">
          
          <div className="temps"><span>{TempAvr}</span>{`${temp} `}</div>
          <div className="temps"><span>{TempMin}</span>{`${tempMin} `}</div>
          <div className="temps"><span>{TempMax}</span>{`${tempMax} `}</div>
         </div>

        </div>
        
        
        </div>
        <div>
         {`Humidity: ${humidity}%`}
        </div>

     </div>
    </div>
        
        
        </React.Fragment>
     );
}
 
export default Card;