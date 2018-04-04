import React from 'react';
import {Line as LineChart} from 'react-chartjs';
require('./KeyPerformanceIndicators.css');

let chartData = {
  labels : ["1 Jan","1 Feb","1 Mar","1 Apr","1 May","1 Jun","1 Jul","1 Aug","1 Sep"],
  datasets: [{
    label: "Orders",
    fillColor: "#EDF5FF",
    borderColor: "#1875F0",
    strokeColor : "#1875F0",
    pointColor : "#fff",
    pointStrokeColor : "#1875F0",
    pointHighlightFill: "#fff",
    pointHighlightStroke: "#ff6c23",
    lineTension: 0,
    data : [3000, 6100, 3900, 5500, 6300, 4300, 5000, 4500, 5700]
  }]
};

let chartOptions = {
  responsive: true,
  datasetStrokeWidth : 3,
  pointDotStrokeWidth : 4,
  tooltipFillColor: "rgba(0,0,0,0.8)",
  tooltipFontStyle: "bold",
  tooltipTemplate: "<%if (label){%><%=label %>: <%}%><%= value %>",
  scales: {
    xAxes: [{
      ticks: {
        fontColor: "#B3B3B3"
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        callback: function(value, index, values) {
          return value/1000 + 'K';
        },
        fontColor: "#B3B3B3"
      }
    }]
  },
  bezierCurve : false,
  legend: {
    display: true,
    position: "bottom",
    labels: {
        fontColor: "#333",
        fontSize: 16
    }
  }
};

const IndicatorLayout = (props) => {
  const net = props.net * 100;
  const netClass = net > 0 ? "positive" : "negative";

  return (
    <li>
      <p className="label">{props.label}</p>
      <p className="total">{props.total}</p>
      <p className={"net " + netClass}>{(net > 0 && "+") + net}%</p>
    </li>
  )
}

const Indicators = [{
  label: "Revenue",
  total: "$ 8749",
  net: .54
}, {
  label: "Registrations",
  total: 65,
  net: .21
},{
  label: "Profit",
  total: "$ 177.62",
  net: -.11
},{
  label: "Average Cost",
  total: "$ 33.11",
  net: -.11
},{
  label: "Refunded",
  total: "25%",
  net: -.11
},{
  label: "Growth",
  total: 25,
  net: -.11
}]

const KeyPerformanceIndicators = () => (
  <div id="key-performance-indicators" className="section">
    <div className="heading">
      Key Performance Indicators
    </div>
    <div>
      <ul>
        {Indicators.map( ind => {
          return (
            <IndicatorLayout 
              label={ind.label}
              total={ind.total}
              net={ind.net} /> )
          })}
      </ul>
      <div className="graph">
        <LineChart data={chartData} options={chartOptions} width="800" height="300"/>
      </div>
    </div>
  </div>
);

export default KeyPerformanceIndicators;

