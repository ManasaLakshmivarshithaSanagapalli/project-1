import React, { Component } from 'react';

import C3Chart from 'react-c3js';
import 'c3/c3.css';
const PieChart = (Info) => {
    console.log(Info)
        const data = {
            columns: Info.Info,
            type:"pie",
          };
          const color = {pattern:["#f0f1f4","#7a6fbe","#28bbe3","#2f8ee0"]}
          const pie = {
              label:{show:!1}
            }

        return (
            <React.Fragment>
               <C3Chart data={data} pie={pie} color={color}/>
            </React.Fragment>
        );
}

export default PieChart;