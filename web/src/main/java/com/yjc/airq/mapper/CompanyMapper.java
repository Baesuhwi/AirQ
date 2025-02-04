package com.yjc.airq.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.yjc.airq.domain.Company_InfoVO;

public interface CompanyMapper {
	//회사
	public void sellerList(Company_InfoVO company);
	
	//투찰 작성
	public Company_InfoVO company_info(String member_id);
	public int bidNumber(@Param("company_code") String company_code,@Param("period_day") String period_day);
	public double star_score_avg(@Param("company_code") String company_code,@Param("period_day") String period_day);
	public String company_code(String member_id);
	public String company_name(String company_code);
	public String member_id(String company_code);
	
	//건수
	public int bidTotalNum(String company_code);
	
	//마이페이지 셀러 그래프
	public ArrayList<Company_InfoVO> c_code(@Param("member_id")String member_id);
	
	//리뷰에서 보여줄 별점
	public double rStarScore(String company_code);
}
