// 셀렉트 옵션에 따른 데이터 값 불러오기
$(document).ready(function(){
	$("#change") .click(function(){
		var query = {
				selected : $("select option:selected").val(),
		}
		$.ajax({
			type : "POST",
			data : query,
			url : "mypageNormalPayAjax",
			success : function(data){
				if(data == "1"){
					$(".form2").children().show();
					$(".form2").show();
					$(".form3").children().hide();
					$(".form3").hide();
					$(".form4").children().hide();
					$(".form4").hide();
					
				}else if(data == "2"){
					$(".form2").children().hide();
					$(".form2").hide();
					$(".form3").children().show();
					$(".form3").show();
					$(".form4").children().hide();
					$(".form4").hide();
				}else if(data =="3"){
					$(".form2").children().hide();
					$(".form2").hide();
					$(".form3").children().hide();
					$(".form3").hide();
					$(".form4").children().show();
					$(".form4").show();
				}
			}
		})
	});
});

//별점 버튼 클릭 시 데이터 넘어가는것
$(document).ready(function(){
	$("#gavestar").click(function(){
		var btn = document.getElementById("star").value; 
//		console.log(document.getElementById("star").value);
		$.ajax({
			type : "POST",
			data : btn,
			url : "s",
			success : function(data){
				
			}
		})
	});
});