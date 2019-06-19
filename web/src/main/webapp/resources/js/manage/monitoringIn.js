$.ajax({
	type : "GET",
	url : "inOldData",
	dataType : "json",
	success : function(data){
		$("#matterValue").text(data.matterValue);
		$("#todayAvg").text(data.todayAvg);
		$("#overValue").text(data.overValue);
		var gradeText = "";
		var gradeImage = "";
		var gradeRecommend = "";
		switch (data.grade) {
		  case 1 :
			  gradeText = "최고";
			  gradeImage = "1";
			  gradeRecommend = "최적의 공기 상태에요. 이 상태를 유지해주세요.";
			  break;
		  case 2 :
			  gradeText = "좋음";
			  gradeImage = "1";
			  gradeRecommend = "최적의 공기 상태에요. 이 상태를 유지해주세요.";
			  break;
		  case 3 :
			  gradeText = "양호";
			  gradeImage = "2";
			  gradeRecommend = "좋은 공기 상태에요. 30분간 환기를 시켜주면 더 좋아요.";
			  break;
		  case 4 :
			  gradeText = "보통";
			  gradeImage = "2";
			  gradeRecommend = "좋은 공기 상태에요. 30분간 환기를 시켜주면 더 좋아요.";
			  break;
		  case 5 :
			  gradeText = "나쁨";
			  gradeImage = "3";
			  gradeRecommend = "공기 상태가 좋지 않아요. 공기청정기를 가동하거나 환기를 시켜주세요.";
			  break;
		  case 6 :
			  gradeText = "상당히 나쁨";
			  gradeImage = "4";
			  gradeRecommend = "공기 상태가 좋지 않아요. 공기청정기를 가동하거나 환기를 시켜주세요.";
			  break;
		  case 7 :
			  gradeText = "매우 나쁨";
			  gradeImage = "5";
			  gradeRecommend = "공기 상태가 최악이에요. 이 상태가 지속될 시 공기 질 개선 서비스를 받으세요.";
			  break;
		  case 8 :
			  gradeText = "최악";
			  gradeImage = "6";
			  gradeRecommend = "공기 상태가 최악이에요. 이 상태가 지속될 시 공기 질 개선 서비스를 받으세요.";
			  break;
		}
		$("#face").attr('src',"/resources/images/face_"+gradeImage+".svg");
		$(".info_grade__value").text(gradeText);
		$(".info_grade__container").addClass("grade_"+data.grade);
		$(".info_behavior").text(gradeRecommend);
		monthChart(data.monthData,data.dataGubun);	//올해 월별 평균
		dayChart(data.dayData,data.dataGubun);	//오늘로부터 7일 전까지 요일별 평균
		hourChart(data.timeData,data.dataGubun);	//하루 - 시간별
		inOldData(data.oldData);	//기본 30개값 가져오기
	}
});

function hourChart(timeData,dataGubun) {
	am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("hourChart", am4charts.XYChart);

		// Add data
		chart.data =  timeData;

		// Create axes
		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "TIME";
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.renderer.minGridDistance = 30;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

		// Create series
		var series = chart.series.push(new am4charts.ColumnSeries());
		series.dataFields.valueY = "VALUE";
		series.dataFields.categoryX = "TIME";
		series.name = "VALUE";
		series.columns.template.tooltipText = "[bold]{valueY}[/]"+"µg/m³";
		series.columns.template.fillOpacity = 1;	//투명도
		series.columns.template.fill = am4core.color("#B5B2FF");	//기본 색상
		series.columns.template.adapter.add("fill", function(fill, target) {
			if (target.dataItem.valueY >= dataGubun[0]) {
				return am4core.color("#BDBDBD");
			}else if(target.dataItem.valueY >= dataGubun[1]){
				return am4core.color("#FFA7A7");
			}else if(target.dataItem.valueY >= dataGubun[2]){
				return am4core.color("#FFC19E");
			}else if(target.dataItem.valueY >= dataGubun[3]){
				return am4core.color("#FAED7D");
			}else if(target.dataItem.valueY >= dataGubun[4]){
				return am4core.color("#CEF279");
			}else if(target.dataItem.valueY >= dataGubun[5]){
				return am4core.color("#B2EBF4");
			}else if(target.dataItem.valueY >= dataGubun[6]){
				return am4core.color("#B2CCFF");
			}else {
				return fill;
			}
		});

		var columnTemplate = series.columns.template;
		columnTemplate.strokeWidth = 0;
		columnTemplate.strokeOpacity = 1;

	}); // end am4core.ready()
};


function dayChart(dayData,dataGubun) {
	am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("dayChart", am4charts.XYChart);

		// Add data
		chart.data = dayData;

		// Create axes
		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "DAY";
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.renderer.minGridDistance = 30;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

		// Create series
		var series = chart.series.push(new am4charts.ColumnSeries());
		series.dataFields.valueY = "VALUE";
		series.dataFields.categoryX = "DAY";
		series.name = "VALUE";
		series.columns.template.tooltipText = "[bold]{valueY}[/]"+"µg/m³";
		series.columns.template.fillOpacity = 1;	//투명도
		series.columns.template.fill = am4core.color("#B5B2FF");	//기본 색상
		series.columns.template.adapter.add("fill", function(fill, target) {
			if (target.dataItem.valueY >= dataGubun[0]) {
				return am4core.color("#BDBDBD");
			}else if(target.dataItem.valueY >= dataGubun[1]){
				return am4core.color("#FFA7A7");
			}else if(target.dataItem.valueY >= dataGubun[2]){
				return am4core.color("#FFC19E");
			}else if(target.dataItem.valueY >= dataGubun[3]){
				return am4core.color("#FAED7D");
			}else if(target.dataItem.valueY >= dataGubun[4]){
				return am4core.color("#CEF279");
			}else if(target.dataItem.valueY >= dataGubun[5]){
				return am4core.color("#B2EBF4");
			}else if(target.dataItem.valueY >= dataGubun[6]){
				return am4core.color("#B2CCFF");
			}else {
				return fill;
			}
		});

		var columnTemplate = series.columns.template;
		columnTemplate.strokeWidth = 0;
		columnTemplate.strokeOpacity = 1;

	}); // end am4core.ready()
};

function monthChart(monthData,dataGubun) {
	am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_animated);
		// Themes end

		// Create chart instance
		var chart = am4core.create("monthChart", am4charts.XYChart);

		// Add data
		chart.data = monthData;

		// Create axes
		var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
		categoryAxis.dataFields.category = "MONTH";
		categoryAxis.renderer.grid.template.location = 0;
		categoryAxis.renderer.minGridDistance = 30;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

		// Create series
		var series = chart.series.push(new am4charts.ColumnSeries());
		series.dataFields.valueY = "VALUE";
		series.dataFields.categoryX = "MONTH";
		series.name = "VALUE";
		series.columns.template.tooltipText = "[bold]{valueY}[/]"+"µg/m³";
		series.columns.template.fillOpacity = 1;	//투명도
		series.columns.template.fill = am4core.color("#B5B2FF");	//기본 색상
		series.columns.template.adapter.add("fill", function(fill, target) {
			if (target.dataItem.valueY >= dataGubun[0]) {
				return am4core.color("#BDBDBD");
			}else if(target.dataItem.valueY >= dataGubun[1]){
				return am4core.color("#FFA7A7");
			}else if(target.dataItem.valueY >= dataGubun[2]){
				return am4core.color("#FFC19E");
			}else if(target.dataItem.valueY >= dataGubun[3]){
				return am4core.color("#FAED7D");
			}else if(target.dataItem.valueY >= dataGubun[4]){
				return am4core.color("#CEF279");
			}else if(target.dataItem.valueY >= dataGubun[5]){
				return am4core.color("#B2EBF4");
			}else if(target.dataItem.valueY >= dataGubun[6]){
				return am4core.color("#B2CCFF");
			}else {
				return fill;
			}
		});

		var columnTemplate = series.columns.template;
		columnTemplate.strokeWidth = 0;
		columnTemplate.strokeOpacity = 1;

	}); // end am4core.ready()
};

//live chart시작
function inOldData(OldData) {
	am4core.ready(function() {

		// Themes begin
		am4core.useTheme(am4themes_spiritedaway);
		// Themes end

		var chart = am4core.create("chartdiv", am4charts.XYChart);
		chart.hiddenState.properties.opacity = 0;

		chart.padding(0, 0, 0, 0);

		chart.zoomOutButton.disabled = true;

		var data = [];
		var value;
		var i = 0;

		for (i = 0; i < OldData.length; i++) {
			value = OldData[i].VALUE;
			data.push({
				TIME : new Date(OldData[i].TIME),
				VALUE : value
			});
		}
		chart.data = data;

		var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
		dateAxis.renderer.grid.template.location = 0;
		dateAxis.renderer.minGridDistance = 30;
		dateAxis.dateFormats.setKey("second", "ss");
		dateAxis.periodChangeDateFormats.setKey("second", "[bold]h:mm a");
		dateAxis.periodChangeDateFormats.setKey("minute", "[bold]h:mm a");
		dateAxis.periodChangeDateFormats.setKey("hour", "[bold]h:mm a");
		dateAxis.renderer.inside = true;
		dateAxis.renderer.axisFills.template.disabled = true;
		dateAxis.renderer.ticks.template.disabled = true;

		var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis.tooltip.disabled = true;
		valueAxis.interpolationDuration = 500;
		valueAxis.rangeChangeDuration = 500;
		valueAxis.renderer.inside = true;
		valueAxis.renderer.minLabelPosition = 0.05;
		valueAxis.renderer.maxLabelPosition = 0.95;
		valueAxis.renderer.axisFills.template.disabled = true;
		valueAxis.renderer.ticks.template.disabled = true;

		var series = chart.series.push(new am4charts.LineSeries());
		series.dataFields.dateX = "TIME";
		series.dataFields.valueY = "VALUE";
		series.interpolationDuration = 500;
		series.defaultState.transitionDuration = 0;
		series.tensionX = 0.8;

		chart.events.on("datavalidated", function() {
			dateAxis.zoom({
				start : 1 / 15,
				end : 1.2
			}, false, true);
		});

		dateAxis.interpolationDuration = 500;
		dateAxis.rangeChangeDuration = 500;

		// 창이 내려갔을때 어떤 행동을 할것인가
		// document.addEventListener("visibilitychange", function() {
		// startInterval();
		// if (document.hidden) {
		// if (interval) {
		// clearInterval(interval);
		// }
		// }
		// else {
		// startInterval();
		// }
		// }, false);

		// add data
		var interval;
		function startInterval() {
			interval = setInterval(function() {
				$.ajax({
					type : "GET",
					url : "inNowData",
					dataType : "json",
					success : function(data) {
						$("#matterValue").text(data.matterValue);
						$("#todayAvg").text(data.todayAvg);
						$("#overValue").text(data.overValue);
						var gradeText = "";
						var gradeImage = "";
						var gradeRecommend = "";
						switch (data.grade) {
						  case 1 :
							  gradeText = "최고";
							  gradeImage = "1";
							  gradeRecommend = "최적의 공기 상태에요. 이 상태를 유지해주세요.";
							  break;
						  case 2 :
							  gradeText = "좋음";
							  gradeImage = "1";
							  gradeRecommend = "최적의 공기 상태에요. 이 상태를 유지해주세요.";
							  break;
						  case 3 :
							  gradeText = "양호";
							  gradeImage = "2";
							  gradeRecommend = "좋은 공기 상태에요. 30분간 환기를 시켜주면 더 좋아요.";
							  break;
						  case 4 :
							  gradeText = "보통";
							  gradeImage = "2";
							  gradeRecommend = "좋은 공기 상태에요. 30분간 환기를 시켜주면 더 좋아요.";
							  break;
						  case 5 :
							  gradeText = "나쁨";
							  gradeImage = "3";
							  gradeRecommend = "공기 상태가 좋지 않아요. 공기청정기를 가동하거나 환기를 시켜주세요.";
							  break;
						  case 6 :
							  gradeText = "상당히 나쁨";
							  gradeImage = "4";
							  gradeRecommend = "공기 상태가 좋지 않아요. 공기청정기를 가동하거나 환기를 시켜주세요.";
							  break;
						  case 7 :
							  gradeText = "매우 나쁨";
							  gradeImage = "5";
							  gradeRecommend = "공기 상태가 최악이에요. 이 상태가 지속될 시 공기 질 개선 서비스를 받으세요.";
							  break;
						  case 8 :
							  gradeText = "최악";
							  gradeImage = "6";
							  gradeRecommend = "공기 상태가 최악이에요. 이 상태가 지속될 시 공기 질 개선 서비스를 받으세요.";
							  break;
						}
						$("#face").attr('src',"/resources/images/face_"+gradeImage+".svg");
						for(var i=1; i<9; i++){
							$(".info_grade__container").removeClass("grade_"+i);
						}
						$(".info_grade__value").text(gradeText);
						$(".info_grade__container").addClass("grade_"+data.grade);
						$(".info_behavior").text(gradeRecommend);
						chart.addData({
							TIME : new Date(data.nowData[0].TIME),
							VALUE : data.nowData[0].VALUE
						}, 1);
					}
				});
			}, 6000);
		}

		startInterval();

		// all the below is optional, makes some fancy effects
		// gradient fill of the series
		series.fillOpacity = 1;
		var gradient = new am4core.LinearGradient();
		gradient.addColor(chart.colors.getIndex(0), 0.2);
		gradient.addColor(chart.colors.getIndex(0), 0);
		series.fill = gradient;

		// this makes date axis labels to fade out
		dateAxis.renderer.labels.template.adapter.add("fillOpacity", function(
				fillOpacity, target) {
			var dataItem = target.dataItem;
			return dataItem.position;
		})

		// need to set this, otherwise fillOpacity is not changed and not set
		dateAxis.events.on("validated", function() {
			am4core.iter.each(dateAxis.renderer.labels.iterator(), function(
					label) {
				label.fillOpacity = label.fillOpacity;
			})
		})

		// this makes date axis labels which are at equal minutes to be rotated
		dateAxis.renderer.labels.template.adapter.add("rotation", function(
				rotation, target) {
			var dataItem = target.dataItem;
			if (dataItem.date
					&& dataItem.date.getTime() == am4core.time.round(
							new Date(dataItem.date.getTime()), "minute")
							.getTime()) {
				target.verticalCenter = "middle";
				target.horizontalCenter = "left";
				return -90;
			} else {
				target.verticalCenter = "bottom";
				target.horizontalCenter = "middle";
				return 0;
			}
		})

		// bullet at the front of the line
		var bullet = series.createChild(am4charts.CircleBullet);
		bullet.circle.radius = 5;
		bullet.fillOpacity = 1;
		bullet.fill = chart.colors.getIndex(0);
		bullet.isMeasured = false;

		series.events.on("validated", function() {
			bullet.moveTo(series.dataItems.last.point);
			bullet.validatePosition();
		}); // end am4core.ready()
	});
}
//live chart끝