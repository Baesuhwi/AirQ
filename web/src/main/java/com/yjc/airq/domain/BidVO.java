package com.yjc.airq.domain;

import lombok.Data;

@Data
public class BidVO {
	private String tender_code;
	private String company_code;
	private int bid_price;
	private String bid_ppt_name;
	private int bid_ppt_score;
	private String win_bid_whether;
	private String upload_code;
	
	private int bidNum;
	private double star_score_avg;
	private String note;
	private String company_name;
	private String member_id;
	private int totalScore=0;
	private int bidNumScore;
	private int bidStarScore;
	private int bidPriceScore;
	//private int rank;
}
