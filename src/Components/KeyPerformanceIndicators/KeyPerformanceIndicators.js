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
  <div id="key-performance-indicators" class="section">
    <div class="heading">
      Key Performance Indicators
    </div>
    <div>
      <ul>
        <li>
          <p class="label">Revenue</p>
          <p class="total">$ 8749</p>
          <p class="net positive">+54%</p>
        </li>
        <li>
          <p class="label">Registrations</p>
          <p class="total">65</p>
          <p class="net positive">+21%</p>
        </li>
        <li>
          <p class="label">Profit</p>
          <p class="total">$ 177.62</p>
          <p class="net negative">-11%</p>
        </li>
        <li>
          <p class="label">Average Cost</p>
          <p class="total">$ 33.11</p>
          <p class="net negative">-11%</p>
        </li>
        <li>
          <p class="label">Refunded</p>
          <p class="total">25%</p>
          <p class="net negative">-11%</p>
        </li>
        <li>
          <p class="label">Growth</p>
          <p class="total">25</p>
          <p class="net negative">-11%</p>
        </li>
      </ul>
      <div class="graph">
        <LineChart data={chartData} options={chartOptions} width="800" height="300"/>
      </div>
    </div>
  </div>
);

export default KeyPerformanceIndicators;

