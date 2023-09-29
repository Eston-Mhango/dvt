'use strict';


$(document).ready(function() {

    // Chart 1: Area Chart
    if ($('#apexcharts-1').length > 0) {
        var options1 = {
            chart: {
                height: 350,
                type: "area",
                toolbar: {
                    show: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            series: [{
				name: "HIGH",
				color:'#EF9595',
                data: [90,80, 75, 81, 102, 115, 90]
            }, {
                name: "LOW",
                color: '#0E21A0',
                data: [55,48, 56, 60, 74, 62, 75]
            }],
            xaxis: {
                categories: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
            }
        };
        var chart1 = new ApexCharts(
            document.querySelector("#apexcharts-1"),
            options1
        );
        chart1.render();
    }

    // Chart 2: Another type of chart (e.g., bar chart)
    if ($('#apexcharts-2').length > 0) {
        var options2 = {
            chart: {
                height: 350,
                type: "area",
                toolbar: {
                    show: false
                },
            },
            // Define options for the second chart here
			dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            series: [ {
                name: "Heart Rate",
                color: '#9D44C0',
                data: [24, 48, 56, 32, 34, 42, 25]
            }],
            xaxis: {
                categories: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
            }

        };
        var chart2 = new ApexCharts(
            document.querySelector("#apexcharts-2"),
            options2
        );
        chart2.render();
    }

    // Add more charts as needed by following the same structure
  // Chart 3: Another type of chart (e.g., bar chart)
  if ($('#apexcharts-3').length > 0) {
	var options3 = {
		chart: {
			height: 350,
			type: "area",
			toolbar: {
				show: false
			},
		},
		// Define options for the third chart here

		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: "smooth"
		},
		series: [ {
			name: "SPO2",
			color: '#64CCC5',
			data: [24, 48, 56, 32, 34, 42, 25]
		}],
		xaxis: {
			categories: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
		}
	};
	var chart3 = new ApexCharts(
		document.querySelector("#apexcharts-3"),
		options3
	);
	chart3.render();
}


	  // Chart 4: Another type of chart 
	  if ($('#apexcharts-4').length > 0) {
        var options4 = {
            chart: {
                height: 350,
                type: "area",
                toolbar: {
                    show: false
                },
            },
            // Define options for the second chart here
			dataLabels: {
                enabled: false
            },
            stroke: {
                curve: "smooth"
            },
            series: [ {
                name: "LOW",
                color: '#FFC7EA',
                data: [24, 48, 56, 32, 34, 42, 25]
            }],
            xaxis: {
                categories: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN'],
            }
        };
        var chart4 = new ApexCharts(
            document.querySelector("#apexcharts-4"),
            options4
        );
        chart4.render();
    }
	
});
