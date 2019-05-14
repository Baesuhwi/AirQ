package com.yjc.airq.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.yjc.airq.domain.BidVO;

public interface BidMapper {
	// 입찰 공고 삭제
	public ArrayList<BidVO> findUploadCode(String tender_code);
	public void deleteBid(String tender_code);
	
	// 투찰 공고 세부 내용
	public ArrayList<BidVO> bidContent(String tender_code);
	
	// 투찰 등록
	public void addBid(BidVO bidVo);
	
	// 투찰 작성 권한 체크(한 번만 등록 가능)
	public ArrayList<BidVO> bidPCheck(String tender_code);
	
	// 투찰 삭제
	public void bidDelete(BidVO bidVo);
	public String bUpload_code(BidVO bidVo);
	
	// 투찰 점수 - 건수
	public ArrayList<BidVO> bidNumScore(@Param("tender_code") String tender_code,@Param("period_day") String period_day);
	// 투찰 점수 - 별점
	public ArrayList<BidVO> bidStarScore(@Param("tender_code") String tender_code,@Param("period_day") String period_day);
	// 투찰 점수 - 별점
	public ArrayList<BidVO> bidPriceScore(String tender_code);
	
	// 투찰 점수 부여
	public int bid_ppt_score(BidVO bidVo);
}
