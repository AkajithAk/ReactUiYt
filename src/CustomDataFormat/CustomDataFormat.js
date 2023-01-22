import React, { useEffect, useState } from "react";

function CustomDataFormat(){
    const [newDate,setNewDate] =useState('')
    useEffect(()=>{
        let todayDate = new Date("feb 14 2022"),
        month = ""+(todayDate.getMonth()+1),
        day = ""+ todayDate.getDate(),
        year = todayDate.getFullYear();
        if(day.length<2){
            day = '0'+day
        }
        if(month.length<2){
            month = '0'+month
        }
        console.log(day,month,year)
        setNewDate([month,year,day].join('-'))

    },[])
    return(
        <div>
            <h1>{newDate}</h1>
        </div>
    );
}
export default CustomDataFormat;