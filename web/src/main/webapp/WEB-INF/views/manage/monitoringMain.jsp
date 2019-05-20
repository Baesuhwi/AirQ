<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="../include/header.jsp"%>
<link rel="stylesheet" href="resources/css/manage/monitoringMain.css">
<%--지도를 나타내주는 곳  시작--%>
<div id="map" style="width:100%; height:800px;"></div>
<%--지도를 나타내주는 곳  끝--%>
<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=tpllhjh4tl&submodules=geocoder"></script>
<script type="text/javascript" src="https://navermaps.github.io/maps.js.ncp/docs/js/MarkerClustering.js"></script>
<script src="resources/js/manage/monitoringMain.js"></script>
<%@include file="../include/footer.jsp"%>