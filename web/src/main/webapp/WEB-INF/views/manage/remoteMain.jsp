<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../include/header.jsp" %>
<link rel="stylesheet" type="text/css" href="/resources/css/manage/remoteMain.css" />
	
	<div class="container2">
	
	<c:forEach var="myiot" items="${myIot}">
		<figure>
			<div class="switch">
			
			<%-- 보일러 사진 --%>
			<c:if test="${myiot.model_name eq 'boiler' }">
				<img class="window" src="resources/images/boiler.png" /><br/>
			</c:if>
			
			<%-- 창문 사진 --%>
			<c:if test="${myiot.model_name eq 'window' }">
				<img class="window" src="resources/images/window.png" /><br/>
			</c:if>
			
			<%-- 환풍기 사진 --%>
			<c:if test="${myiot.model_name eq 'ventilator' }">
				<img class="window" src="resources/images/Ventilator.jpg" /><br/>
			</c:if>
			
			<%-- 공기청정기 사진 --%>
			<c:if test="${myiot.model_name eq 'aircleaner' }">
				<img class="window" src="resources/images/airclean.jpg" /><br/>
			</c:if>
			
			<div class="nickName">
				<b>${myiot.iot_id }</b>
			</div>
			
	        <div class="local">
	           	 ${myiot.model_name } 원격제어 <br/> 위치: ${myiot.place_name}
	        </div>
	        
	        <div class="on_off">
	            <label class="rocker rocker-small">
	                <input type="checkbox" class="onOff" value="check">
	                <span id="11" class="switch-left choice">ON</span>
	                <span id="12" class="switch-right choice">OFF</span>
	            </label>
	  
	            <label class="rocker rocker-small">
	                <input type="checkbox" class="autoManual">
	                <span class="switch-auto choice">자동</span>
	                <span class="switch-manual choice">수동</span>
	            </label>
	        </div>
	        </div>
        </figure>
	</c:forEach>
	        
        <button id="btn-reg">IoT 제품 제어 등록</button>
    </div>
    <script type="text/javascript">
		$(document).ready(function() {
			$(".choice").click(function() {
				var p = $(this).attr('id'); // get id value (i.e. pin13, pin12, or pin11)
				if($(this).attr('id') == 11){
					alert("ON");
				}else if($(this).attr('id') == 12){
					alert("OFF");
				}
				
				// send HTTP GET request to the IP address with the parameter "pin" and value "p", then execute the function
				$.get("http://39.127.7.97:7777/", {pin : p}); // execute get request (아두이노 웹서버 IP 주소로 고쳐 준다)
			});
		});
	</script>
	<script src='resources/js/manage/remoteMain.js'></script>
<%@include file="../include/footer.jsp" %>