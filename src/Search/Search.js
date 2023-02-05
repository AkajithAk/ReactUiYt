import React, { useEffect, useState } from "react";

function Search(){
    const [searchVal,setSearchVal]=useState([])

    const values = [
        {title:"how to get value from input"},
        {title:"dow to get1 value from input"},
        {title:"eow to get2 value from input"},
        {title:"fow to get3 value from input"},
        {title:"gow to get value from input"},
        {title:"iow to get value from input"},
        {title:"jow to get value from input"},
        {title:"kow to get value from input"},
    ]
    const handleSearch = (e) =>{
        e.preventDefault()
        var lowerCase = e.target.search.value.toLowerCase()
        console.log(lowerCase)
        var result = values.filter(data=>data.title.includes(lowerCase))
        setSearchVal(result)
    } 

    const handleChange = (e) =>{
        if(e.target.value.length == 0){
            setSearchVal(values)
        }
    }

    useEffect(()=>{
        setSearchVal(values)
    },[])
    return(
        <div style={{margin:"40px"}}>
            <form onSubmit={(e)=>handleSearch(e)}>
                <input onChange={(e)=>handleChange(e)} name="search" placeholder="Type to search" />
                <button>Search</button>
            </form>

            {searchVal.map((val,i)=><h5 key={i}>{val.title}</h5>)}
           
        </div>
    );
}
export default Search;