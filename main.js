$(function() {
	$('#gradientTop').css('height', ($('header').height()));
	$('main').css('margin-top', ($('header').height()));

	// javascript
	var dataJS = [
		{
			value: 95,
			color: "#b72200"
		}, {
			value: 5,
			color: "#eee"
		}
	]
	// python
	var dataPY = [
		{
			value: 80,
			color: "#b72200"
		}, {
			value: 20,
			color: "#eee"
		}
	]
	// HTML/CSS
	var dataHTML = [
		{
			value: 95,
			color: "#b72200"
		}, {
			value: 5,
			color: "#eee"
		}
	]
	// c
	var dataNode = [
		{
			value: 75,
			color: "#b72200"
		}, {
			value: 25,
			color: "#eee"
		}
	]
	var options = {
		percentageInnerCutout: 90,
	    animation: false,
	    responsive: true
	}
	var ctx_0 = $("#skillChartJS").get(0).getContext("2d");
	var myDoughnutChart_0 = new Chart(ctx_0).Doughnut(dataJS, options);

	var ctx_1 = $("#skillChartPY").get(0).getContext("2d");
	var myDoughnutChart_1 = new Chart(ctx_1).Doughnut(dataPY, options);

	var ctx_2 = $("#skillChartHTML").get(0).getContext("2d");
	var myDoughnutChart_2 = new Chart(ctx_2).Doughnut(dataHTML, options);

	var ctx_3 = $("#skillChartNode").get(0).getContext("2d");
	var myDoughnutChart_3 = new Chart(ctx_3).Doughnut(dataNode, options);

});
