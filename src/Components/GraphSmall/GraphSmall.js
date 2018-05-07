import React from 'react';
import {Line as LineChart} from 'react-chartjs';
import Ellipses from '../Ellipses';
require('./GraphSmall.css');

let chartData = {
	labels: ["", "", "", "", "", "", ""],
	datasets: [
		{
			label: "My First dataset",
			fillColor: "#EDF5FF",
			strokeColor: "#1875F0",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
};

let chartOptions = {

	///Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : true,

	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",

	//Number - Width of the grid lines
	scaleGridLineWidth : 0,

	//Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines: false,

	//Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines: false,

	//Boolean - Whether the line is curved between points
	bezierCurve : false,

	//Number - Tension of the bezier curve between points
	bezierCurveTension : 0.4,

	//Boolean - Whether to show a dot for each point
	pointDot : false,

	//Number - Radius of each point dot in pixels
	pointDotRadius : 4,

	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,

	//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
	pointHitDetectionRadius : 20,

	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,

	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 2,

	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,

	//Boolean - Whether to horizontally center the label and point dot inside the grid
	offsetGridLines : false
};

const GraphSmall = () => (
  <div className="graph-small section">
	<div class="options">
    <Ellipses /></div>
    <div className="header">Monthly Active Android Users</div>
    <div className="body">
      <div className="labels">
        <p className="total">1:31</p>
        <p className="rate positive">+16.7%</p>
      </div>
      <div className="chart-container">
        <LineChart data={chartData} options={chartOptions} width="180" height="80"/>
      </div>
    </div>
  </div>
);

export default GraphSmall;