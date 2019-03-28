package com.yjc.airq;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import com.yjc.airq.domain.MemberVO;
import com.yjc.airq.service.MemberService;

import lombok.AllArgsConstructor;

/**
 * 로그인을 관리하는 controller
 */
@Controller
@AllArgsConstructor
public class LoginController {
	MemberService memberService;
	
	//로그인 메인페이지로 가기
	@RequestMapping(value = "loginMain", method = RequestMethod.GET)
	public String loginMain(Model model) {
		return "login/loginMain";
	}
	
	//로그인 기능
	@RequestMapping(value="login", method = RequestMethod.POST)
	@ResponseBody
	public String loginMain(MemberVO member, HttpSession session, Model model,@RequestParam String id, @RequestParam String password) {
		System.out.println("id"+member.getId());
		System.out.println("password"+member.getPassword());
		MemberVO result = memberService.login(id);
		if(result!=null) {
			if(password.equals(result.getPassword())) {
			System.out.println("성공은 했다");
			System.out.println(result);
			session.setAttribute("user",result);
			return "success";
			}
			else {
				System.out.println("비번틀림");
				return "failpw";
			}
		}
		else
		System.out.println("아이디 없음");
		return "failid";
		
}
	// 아이디찾기 페이지
	@RequestMapping(value = "findid", method = RequestMethod.GET)
	public String findid(Model model) {
		return "login/findid";
	}
	
	// 아이디 찾기 작성후 확인 버튼 클릭
	@RequestMapping(value = "/findidajax", method = RequestMethod.POST) // value 값이 들어오면 method에 적혀있는 것을 불러주세요
	@ResponseBody
	public String findid(Model model, MemberVO LVOI,@RequestParam String name, @RequestParam int tel, @RequestParam String email) {
		System.out.println(" name :" +LVOI.getName());
		System.out.println(" tel :" + LVOI.getTel());
		System.out.println(" email :" + LVOI.getEmail());
		
		MemberVO A = memberService.findId(LVOI);
		
		if(A != null) {
			if(name.equals(LVOI.getName()) && (email.equals(LVOI.getEmail()) || tel == (LVOI.getTel())) ) {
				System.out.println("성공");
				
				return A.getId();
			}
		 else {
            System.out.println("실패1");
            return "fail";
         }
      }
		System.out.println("실패2");
		return "fail";
		
	}
	
	// 비밀번호찾기 페이지
	@RequestMapping(value = "findpw", method = RequestMethod.GET)
	public String findpw(Model model) {
		return "login/findpw";
	}
	
	// 비밀번호 찾기 작성후 확인 버튼 클릭
	@RequestMapping(value = "/findpwajax", method = RequestMethod.POST) // value 값이 들어오면 method에 적혀있는 것을 불러주세요
	@ResponseBody
	public String findpw(Model model, MemberVO LVOP,@RequestParam String name, @RequestParam int tel, @RequestParam String email, @RequestParam String id) {
		System.out.println(" name :" +LVOP.getName());
		System.out.println(" tel :" + LVOP.getTel());
		System.out.println(" email :" + LVOP.getEmail());
		System.out.println(" id :"+ LVOP.getId());
		
		MemberVO A = memberService.findPw(LVOP);
		
		if(A != null) {
			if(name.equals(LVOP.getName()) && id.equals(LVOP.getId()) && (email.equals(LVOP.getEmail()) || tel == (LVOP.getTel())))  {
				System.out.println("성공");
				
				return A.getPassword();
			}
		 else {
            System.out.println("실패1");
            return "fail";
         }
      }
		System.out.println("실패2");
		return "fail";
		
	}
	
	//로그아웃
	@RequestMapping(value = "logout", method = RequestMethod.GET)
	public String logout(HttpSession session) {
		session.invalidate();
		System.out.println("로그아웃 했다.");
		return "home";
	}
}
