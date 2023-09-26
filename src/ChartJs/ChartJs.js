import React from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';
import {Chart as chartjs} from 'chart.js/auto'

function Chart(){

  const chardData= {
    labels :["A","B"],
    datasets:[{
      label:"Demo",
      data:[3000,2000],
      backgroundColor:["grey","purple"],
      borderColor:["black"],
      borderWidth:3
    }]
  }
  
    return(
      <div style={{display:"flex"}}>
        <div style={{width:400}}>
          <Bar data={chardData} />
        </div>
        <div style={{width:400}}>
          <Line data={chardData} />
        </div>
        <div style={{width:300}}>
          <Pie data={chardData} />
        </div>
      </div>
    )
}
export default Chart;