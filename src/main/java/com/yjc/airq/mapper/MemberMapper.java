package com.yjc.airq.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Param;

import com.yjc.airq.domain.FileTestVO;
import com.yjc.airq.domain.SellerVO;
import com.yjc.airq.domain.MemberVO;

public interface MemberMapper {
	public ArrayList<MemberVO> getMemberList();
<<<<<<< HEAD

	public MemberVO login(@Param("id") String id, @Param("password") String password);

	// 회원 목록 조회
	public ArrayList<MemberVO> memberList();

	// 사업자 등록 번호
	public String sellerList(SellerVO sl);

	// 일반 회원 가입
	public int signup(MemberVO mb);

	// 중복 체크
	public MemberVO idCheck(String id);

	// 파일 업로드
	public String fileDB(FileTestVO file);
=======
	public MemberVO login(String id);
	public MemberVO findId(MemberVO LVOI);
	public MemberVO findPw(MemberVO LVOP);
>>>>>>> 80e7843e99ba3f83a9f08d0e188901833fe3f914
}
