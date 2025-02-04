	$.ajax({
		url:"mypageSellerSales",
		type:"POST",
		dataType: "json",
		async: false,
		success:function(data){
			console.log(data);
			//amchart start
			am4core.ready(function() {
				// Themes begin
				am4core.useTheme(am4themes_animated);
				// Themes end

				// Create chart instance
				var chart = am4core.create("chartdiv", am4charts.XYChart);
				chart.scrollbarX = new am4core.Scrollbar();
				
				chart.data = data;
				
				// Create axes
				var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
				categoryAxis.dataFields.category = "month";
				categoryAxis.renderer.grid.template.location = 1;
				categoryAxis.renderer.minGridDistance = 30;
				categoryAxis.renderer.labels.template.horizontalCenter = "middle";
				categoryAxis.renderer.labels.template.verticalCenter = "middle";
				categoryAxis.renderer.labels.template.rotation = 0;
				categoryAxis.tooltip.disabled = true;
				categoryAxis.renderer.minHeight = 110;

				var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
				valueAxis.renderer.minWidth = 50;

				// Create series
				var series = chart.series.push(new am4charts.ColumnSeries());
				series.sequencedInterpolation = true;
				series.dataFields.valueY = "sum";
				series.dataFields.categoryX = "month";
				series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
				series.columns.template.strokeWidth = 0;

				series.tooltip.pointerOrientation = "vertical";

				series.columns.template.column.cornerRadiusTopLeft = 10;
				series.columns.template.column.cornerRadiusTopRight = 10;
				series.columns.template.column.fillOpacity = 0.8;

				// on hover, make corner radiuses bigger
				var hoverState = series.columns.template.column.states.create("hover");
				hoverState.properties.cornerRadiusTopLeft = 0;
				hoverState.properties.cornerRadiusTopRight = 0;
				hoverState.properties.fillOpacity = 1;

			series.columns.template.adapter.add("fill", function(fill, target) {
					return chart.colors.getIndex(target.dataItem.index);
			});

			// Cursor
			chart.cursor = new am4charts.XYCursor();
				
//			var result = JSON.stringify(data);
//			console.log(result);
//			var result2 = JSON.parse(data);
//			console.log(result2);
//			var result3 = JSON.parse(data);
//			console.log(result3);
		// Add data
		}); // end am4core.ready()
	},
	error:function(){
		alert("연결실패");
	}
});

