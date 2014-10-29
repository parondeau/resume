$(document).ready(function() {
	$('#gradientTop').css('height', ($('header').height()));
	$('main').css('margin-top', ($('header').height()));

	// javascript
	var dataJS = [
		{
			value: 85,
			color: "#b72200"
		}, 
		{
			value: 15,
			color: "#eee"
		}
	]
	// python
	var dataPY = [
		{
			value: 75,
			color: "#b72200"
		}, 
		{
			value: 25,
			color: "#eee"
		}
	]
	// c
	var dataC = [
		{
			value: 40,
			color: "#b72200"
		}, 
		{
			value: 60,
			color: "#eee"
		}
	]
	var options = {
		percentageInnerCutout: 90,
	    animation: false,
	    responsive: true
	}
	var ctx = $("#skillChartJS").get(0).getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(dataJS, options);

	var ctx = $("#skillChartPY").get(0).getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(dataPY, options);

	var ctx = $("#skillChartC").get(0).getContext("2d");
	var myDoughnutChart = new Chart(ctx).Doughnut(dataC, options);

});