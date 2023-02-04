import React from "react";
import './ReactTable.css';

function ReactTable(){
    const data=[
        {
        fname:"aaa",
        lname:"bbb"
    },
        {
        fname:"ccc",
        lname:"ddd"
    },
        {
        fname:"eee",
        lname:"fff"
    },
]
    return(
        <div>
           <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {
                   data.map((val,i)=>
                   <tr key={i}>
                    <td>{val.fname}</td>
                    <td>{val.lname}</td>
                   </tr>
                   ) 
                }
            </tbody>
           </table>
        </div>
    );
}
export default ReactTable;