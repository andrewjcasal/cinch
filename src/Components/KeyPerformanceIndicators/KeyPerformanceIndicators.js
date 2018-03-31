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

const KeyPerformanceIndicators = () => (
  <div id="key-performance-indicators" className="section">
    <div className="heading">
      Key Performance Indicators
    </div>
    <div>
      <ul>
        <li>
          <p className="label">Revenue</p>
          <p className="total">$ 8749</p>
          <p className="net positive">+54%</p>
        </li>
        <li>
          <p className="label">Registrations</p>
          <p className="total">65</p>
          <p className="net positive">+21%</p>
        </li>
        <li>
          <p className="label">Profit</p>
          <p className="total">$ 177.62</p>
          <p className="net negative">-11%</p>
        </li>
        <li>
          <p className="label">Average Cost</p>
          <p className="total">$ 33.11</p>
          <p className="net negative">-11%</p>
        </li>
        <li>
          <p className="label">Refunded</p>
          <p className="total">25%</p>
          <p className="net negative">-11%</p>
        </li>
        <li>
          <p className="label">Growth</p>
          <p className="total">25</p>
          <p className="net negative">-11%</p>
        </li>
      </ul>
      <div className="graph">
        <LineChart data={chartData} options={chartOptions} width="800" height="300"/>
      </div>
    </div>
  </div>
);

export default KeyPerformanceIndicators;

