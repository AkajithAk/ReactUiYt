import React from "react";
import './ReactCsv.css';
import { CSVLink, CSVDownload } from "react-csv";

function ReactCsv(){

    const csvData1 = [
        ["name1", "name2", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
      ];

     const csvData = [
        { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
        { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
        { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
      ];
    
    return(
        <div>
            <CSVLink className="download" data={csvData}>Download me</CSVLink>

            <CSVDownload data={csvData} target="_blank" />
        </div>
    )
}
export default ReactCsv;