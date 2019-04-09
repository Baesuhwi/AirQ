<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../include/header.jsp"%>

<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="resources/css/connect/tenderWrite.css" rel="stylesheet" />

<%--입찰 공고 작성 테이블 시작 --%>
<input type="hidden" id="sigoon_key" value="b0888bae39fbd0463a9252" />
<h1 id="tenderWriteTitle">입찰 작성</h1>
<form action="/tenderWriteComplete" method="POST">
	<table id="tenderWriteTbl">
		<tr>
			<td class="tr">제목</td>
			<td class="tr"><input type="text" id="tender_title" name="tender_title" required autocomplete="off"></td>
		</tr>
		<tr>
			<td>입찰자 명</td>
			<td><input type="text" id="tender_name" name="tender_name" required autocomplete="off"></td>
		</tr>
		<tr>
			<td>주소</td>
			<td>
				<select id="t_addr_do">
					<option>선택</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>측정 일자</td>
			<td><input type="date" id="service_date" name="service_date" required autocomplete="off"></td>
		</tr>
		<tr>
			<td>마감 기한</td>
			<td><input type="date" id="tender_deadline" name="tender_deadline" required autocomplete="off"></td>
		</tr>
		<tr>
			<td>평수</td>
			<td><input type="text" id="t_space" name="t_space" required autocomplete="off"></td>
		</tr>
		<tr>
			<td>층수</td>
			<td><input type="text" id="floor_number" name="floor_number" required autocomplete="off"></td>
		</tr>
		<tr>
			<td>계산 기간</td>
			<td>
				<select id="calculate_period">
					<option value="0" selected>전체</option>
					<option value="3">3개월</option>
					<option value="6">6개월</option>
					<option value="9">9개월</option>
					<option value="12">1년</option>
				</select>
			</td>
		</tr>
		<tr>
			<td>요구사항</td>
			<td><textarea rows="8" cols="50" id="requirement" name="requirement" required autocomplete="off"></textarea></td>
		</tr>
	</table>
	<div id="tenderWriteBtnDiv">
		<input type="submit" id="tenderWriteBtn" name="tenderWriteBtn" value="작성완료">
	</div>
</form>


<%--입찰 공고 작성 테이블 끝 --%>

<script src="/resources/js/connect/tenderWrite.js"></script>
<%@include file="../include/footer.jsp"%>