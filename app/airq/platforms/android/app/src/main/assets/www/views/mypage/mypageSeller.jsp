<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../include/header.jsp" %>
<link rel="stylesheet" type="text/css" href="/resources/css/mypage/mypageSeller.css" />
<h1>판매자-메인 페이지 입니다.</h1>
<%--             <div class="company_code"><input type="checkbox" id="cb" name="cb">${Gra.company_code }</div>  --%>
<%--             <div class="member_id">${Gra.member_id }</div> --%>
<%--             <div class="demand_date">${Gra.demand_date }</div>  --%>
<%--             <div class="payment_price">${Gra.payment_price }</div> --%>
<div id="chartdiv"></div>
<script src="https://www.amcharts.com/lib/4/core.js"></script>
<script src="https://www.amcharts.com/lib/4/charts.js"></script>
<script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>
<script src="resources/js/mypage/mypageSeller.js"></script>
<%@include file="../include/footer.jsp" %>