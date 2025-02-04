package com.yjc.airq.mapper;

import java.util.ArrayList;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.yjc.airq.domain.PostVO;

public interface PostMapper {
	
	public ArrayList<PostVO> getPosts(@Param("startnum") int startnum, @Param("endnum") int endnum,@Param("board_code")String board_code);
	public void insertPost(PostVO post);
	public PostVO detailPost(String post_code);
	public void deletePost(String post_code);
	public void modifyPost(PostVO post);
	public void viewCount(String post_code);
	public void postVote(String post_code);
	public int postCount(String board_code);
	// 마이페이지 메인 - 관리자 상품추천 조회
	public ArrayList<PostVO> postMPrec();
	// 마이페이지 메인 - 관리자 공기질향상방법 조회
	public ArrayList<PostVO> postMPimp();
	// 마이페이지 메인 - 관리자 자유게시판 조회
	public ArrayList<PostVO> postMPlib();
	// 마이페이지 메인 - 관리자 건강지킴이 조회
	public ArrayList<PostVO> postMPhea();
	// 마이페이지 메인 - 관리자 대기오염물질정보 조회
	public ArrayList<PostVO> postMPmet();	
	//마이페이지 관리자 글관리 - 글 상세
	public void deletePostsPost(@Param("post_code") String post_code);
	//마이페이지 일반 글관리 -글삭제
//	public void deletePostsPost1(@Param("post_code") String post_code);
	//마이페이지 일반 글관리 
	public ArrayList<PostVO> postNMP(@Param("member_id")String member_id);

	//mypageNormal - 최신 글
	public ArrayList<Map<String,Object>> normalNewPost(String member_id);
}
