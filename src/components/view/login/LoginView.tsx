import React from "react";
import { MemberLogin } from "../../api";
import { Main } from "../../view";
import { useNavigate } from "react-router-dom";
import { Member } from "../../../store";
import {
  Login
} from "@mui/icons-material";
import {TopBar} from "../ui";

const LoginView = () => {
  const navigate = useNavigate();

  const m = new Member("", "", "", "", "", "", "", "");

  const [member, setMember] = React.useState(m);

  const loginHandle = (event: any) => {
    if (event.target.name === "userId") {
      member.id = event.target.value.toString();
    } else if (event.target.name === "userPass") {
      member.password = event.target.value.toString();
    }

    setMember({ ...member });
  };

  const [loginSucc, setLoginSucc] = React.useState("");

  const loginCheck = () => {
    const loginMember = MemberLogin.instance.memberLogin(member.id, member.password);
    if (loginMember) {
      setLoginSucc("Succ");
      // setMember(loginMember);
      sessionStorage.setItem("loginId",JSON.stringify({"id": loginMember.id, "name": loginMember.name, "type": loginMember.type}));
      navigate("/");
    } else {
      alert("No such Id or Password");
      setMember({ ...member, id: "", password: "" });
    }
  };

  return (
    <>
      <TopBar />
      {loginSucc === "" ? (
        <div className='regist_Root' style={{height: '1200px'}}>
          <div className='regist_Frm'>
            <div>
              <img src="/static/img/main_logo.png" alt="" style={{width: '250px'}}/>
            </div>
            {/* 아이디 */}
            <div className='regist_margin'>
              <p className='regist_sort'>아이디</p>
              <div className='sort_root'>
                <div>
                  <img src="/static/img/subIcon.png" alt="" className='sub_img'/>
                </div>
                <div>
                  <input
                      className='sort_field'
                      type="text"
                      name="userId"
                      placeholder='아이디를 입력하세요'
                      minLength={6}
                      maxLength={12}
                      onChange={loginHandle}
                  />
                </div>
              </div>
            </div>
            {/* 비밀번호 */}
            <div className='regist_margin'>
              <p className='regist_sort'>비밀번호</p>
              <div className='sort_root'>
                <div>
                  <img src="/static/img/subIcon.png" alt="" className='sub_img'/>
                </div>
                <div>
                  <input
                      className='sort_field'
                      type="password"
                      name="userPass"
                      placeholder='비밀번호를 입력하세요'
                      style={{fontFamily: 'Fira Code'}}
                      minLength={8}
                      maxLength={16}
                      onChange={loginHandle}
                  />
                </div>
              </div>
            </div>
            <div className="member_Btn_div">
              <div>
                <p style={{fontSize: '30px', fontWeight: 'bold'}}>로그인</p>
              </div>
              <button
                className="login_Btn_Icon"
                onClick={loginCheck}
              >
                <Login />
              </button>
            </div>
            <div className="login_Text">
              <a href="/login" style={{color: 'black'}}>회원 가입</a>
            </div>
          </div>
        </div>
      ) : (
        <Main />
      )}
    </>
  );
};

export default LoginView;
