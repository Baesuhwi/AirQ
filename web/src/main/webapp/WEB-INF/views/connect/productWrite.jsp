<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../include/header.jsp"%>
<meta name="viewport" content="width=device-width, initial-scale=1">
<input type="hidden" id="sido_key" value="12685d425f1af0872d756c" />	
<div class="container">
	<div class="row">
		<div class="col-md-12 order-md-4">
			<form class="needs-validation" enctype="multipart/form-data" action="productInsert" method="post" novalidate >
				<%-- 상품 이름 시작 --%>
				<div class="row">
					<div style="width: 100%">
						<label for="firstName">서비스 상품 이름</label> 
						<input type="text" class="form-control" id="product_name" placeholder="Product Name" required name="product_name">
						<div class="invalid-feedback">ProductName is empty.</div>
					</div>
				</div>
				<%-- 상품 이름 끝 --%>
				<%--썸네일 추가 시작 --%>
				<div id="divImage" style="display:none;">
					<img id="div_inner_img" src="" alt="이미지를 넣어주세요" width="250px" height="250px">
				</div>
				<div id="thumbnailDiv">
					<input id="fileImage" type="file" name="thumbnail" multiple>
				</div>
				<%--썸네일 추가 끝 --%>
				<%--상품 기본 정보 선택 시작 --%>
				<div class="product_info">
					<label for="product_info">서비스 상품 상세 정보</label><br/>
					<label for="product_price">가격 : </label>
					<input type="number" id="product_price" name="product_price" placeholder="예시:10000"><br/>
					<label for="possible_area">측정 가능지역 : </label>
					<select id="sido_code" class="select">
						<option>광역시/도</option>
					</select>
					<select id="sigoon_code" class="select">
						<option>시/구</option>
					</select>
					<button id="areaAdd" type="button">가능지역 추가하기</button><br/>
					<div id="p_possible_area">
					</div>
					<label for="measure_matter">측정 가능 물질 : </label>
					<select name="matter" id="matter" class="order-option">
                		<option value="측정 물질">측정 물질</option>
           			</select>
           			<button id="matterAdd" type="button">측정물질 추가하기</button><br/>
					<div id="p_measure_matter">
					</div>
					<label for="p_space">측정 적절 평수 : </label>
					<select id="p_space" name="p_space" class="select">
						<option>선택</option>
						<option value="1">1~10평</option>
						<option value="2">11~20평</option>
						<option value="3">21~30평</option>
						<option value="4">31~40평</option>
						<option value="5">41~50평</option>
						<option value="6">51~60평</option>
						<option value="7">61~70평</option>
						<option value="8">71~80평</option>
						<option value="9">81~90평</option>
						<option value="10">91~100평</option>
						<option value="11">100평~</option>
					</select><br/>
					<label for="measure_point">측정 지점 : </label>
					<input type="number" id="measure_point" name="measure_point" placeholder="예시:3"/>
				</div>
				<%--상품 기본 정보 선택 끝 --%>
				<%-- 상품 내용 시작 --%>
				<div class="mb-3">
					<label for="username">서비스 상품 내용</label>
					<div class="input-group">
						<textarea rows="20" cols="100" class="form-control" id="product_detail"
							placeholder="Product Content" name="product_detail" required></textarea>
						<div class="invalid-feedback" style="width: 100%;">ProductContent is empty.</div>
					</div>
				</div>
				<%-- 상품 내용 끝 --%>
				<hr class="mb-4">
				<button class="btn btn-primary btn-lg btn-block" type="submit">Write</button>
			</form>
		</div>
	</div>
</div>
<script type="text/javascript" src="/resources/ckeditor/ckeditor.js"></script>
<script src="/resources/js/connect/productWrite.js"></script>
<%@include file="../include/footer.jsp"%>