import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Card from './card';

const Content = (props) => {

    const[Weather,setWeather]=useState('')
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        async function getWeather(){
        const city=props.data
        const apiKey='4cac087d96c6ebef94a7013b0581b26c'
        const {data}= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        
        if(data){
        setWeather(data)
        setLoading(true)
        
       
        }
        
    }
     console.log(loading,Weather)
        
       
    
    try { getWeather()
        
    } catch (error) {
        alert('no country')
        
    }
},[props.data]
    

    )
    
    return ( 
        
        <React.Fragment>
            <div>{
            loading?
            
            <Card 
            country ={Weather.sys.country} 
            name={Weather.name} 
            weather={Weather.weather[0].description  } 
            tempMax = {Weather.main.temp_max} 
            tempMin={Weather.main.temp_min} 
            temp={Weather.main.temp} 
            humidity={Weather.main.humidity} />:
            <div>Loading</div>
               
        


        }</div>
       
        
        </React.Fragment>
     );
}
 
export default Content;
