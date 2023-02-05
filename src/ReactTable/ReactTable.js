import React from "react";
import './ReactTable.css';

function ReactTable(){
    const data=[
        {
        fname:"Youtube",
        lname:"Link",
        link:"https://www.youtube.com/channel/UCHxAIz7g4fu7UbEY1NuWGng"
    },
        {
        fname:"Instagram",
        lname:"Link",
        link:"https://www.instagram.com/coding__comics/"
    },
        {
        fname:"GitHub",
        lname:"Link",
        link:"https://github.com/AkajithAk"
    },
]

    return(
        <div>
           <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {
                   data.map((val,i)=>
                   <tr key={i}>
                    <td>{val.fname}</td>
                    <td><a href={val.link} target="_blank" >{val.lname}</a></td>
                   </tr>
                   ) 
                }
            </tbody>
           </table>
        </div>
    );
}
export default ReactTable;