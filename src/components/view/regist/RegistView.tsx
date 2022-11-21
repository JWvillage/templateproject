import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MemberRegist from "../../api/member/MemberRegist";
import {TopBar} from "../ui";

const RegistView = () => {
  const navigate = useNavigate();

  const [member, setMember] = useState({
    id: "",
    password: "",
    name: "",
    address: "",
    type: "nor",
  });

  const changeMember = (event: any) => {
    const { value } = event.target;
    const { name } = event.target;
    setMember({...member, [ name ] : value})
    console.log(member)
  };

  return (
    <>
      <TopBar />
      <div className='regist_Root'>
        <div className='regist_Frm'>
          <div>
            <img src="/static/img/main_logo.png" alt="" style={{width: '250px'}}/>
          </div>
          <div className='regist_margin'>
            <p className='regist_sort'>아이디</p>
            <div className='sort_root'>
              <div>
                <img src="" alt="" className='sub_img'/>
              </div>
              <div>
                <input className='sort_field' type="text" name='id' placeholder='아이디를 입력하세요'/>
              </div>
              <div>
                <button type='button' className='sort_btn'>
                  <img src="" alt="" className='sort_img'/>
                </button>
              </div>
            </div>
            <div style={{marginTop: '5px'}}>
              <p><span id='id_check' className='check'></span></p>
              <p>아이디는 <span className='worning'>6자리에서 12자리</span>로 입력해주세요</p>
              <p><span className='worning'>영문과 숫자</span>만 입력해주세요</p>
            </div>
          </div>
          <div className='regist_margin'>
            <p className='regist_sort'>비밀번호</p>
            <div className='sort_root'>
              <div>
                <img src="" alt="" className='sub_img'/>
              </div>
              <div>
                <input className='sort_field' type="password" name='password' placeholder='비밀번호를 입력하세요'/>
              </div>
              <div>
                <button type='button' className='sort_btn'>
                  <img src="" alt="" className='sort_img'/>
                </button>
              </div>
            </div>
            <div style={{marginTop: '5px'}}>
              <p><span id='id_check' className='check'></span></p>
              <p>비밀번호는 <span className='worning'>8자리에서 16자리</span>로 입력해주세요</p>
              <p><span className='worning'>영문(대소문자), 숫자, 문자의 조합</span>으로 입력해주세요</p>
            </div>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>password</th>
            <th>name</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" name="id" onChange={changeMember} />
            </td>
            <td>
              <input type="password" name="password" onChange={changeMember} />
            </td>
            <td>
              <input type="text" name="name" onChange={changeMember} />
            </td>
            <td>
              <input type="text" name="address" onChange={changeMember} />
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => {
          MemberRegist.instance.memberRegist(member);
          navigate("/login");
        }}
      >
        Regist
      </button>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Main
      </button>
    </>
  );
};

export default RegistView;
