import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import MemberRegist from "../../api/member/MemberRegist";
import {TopBar, zipCode} from "../ui";
import {postcodeScriptUrl} from "react-daum-postcode/lib/loadPostcode";

const RegistView = () => {
  const navigate = useNavigate();

  const [member, setMember] = useState({
    id: "",
    password: "",
    name: "",
    type: "nor",
    email: "",
    address: "",
    phone: "",
    registerDate: "",
    birthDay: "",
    gender: "",
    photo: ""
  });

  const changeMember = (event: any) => {
    const { value } = event.target;
    const { name } = event.target;
    setMember({...member, [ name ] : value})
    console.log(member)
  };

  const [gen, setGen] = useState('')

  useEffect(() => {
    const genBtn = document.getElementsByClassName('gen_btn')
    for (var i = 0; i < document.getElementsByClassName('gen_btn').length; i++) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      gen === genBtn[i].getAttribute('value') ?
          genBtn[i].className += ' gen_select' : genBtn[i].className = 'gen_btn'
    }
  }, [gen])

  const genSelect = (event: any) => {
    const { value } = event.target;
    setGen(value)
  };

  const [zoneCode, setZoneCode] = useState('')
  const [address, setAddress] = useState('')

  const handleAddress = (dataName: string, dataValue: string) => {
    dataName === 'zoncode' ? setZoneCode(dataValue) : setAddress(dataValue)
  }
  return (
    <>
      <TopBar />
      <div className='regist_Root'>
        <div className='regist_Frm'>
          <div>
            <img src="/static/img/main_logo.png" alt="" style={{width: '250px'}}/>
          </div>
          {/* 아이디 */}
          <div className='regist_margin'>
            <p className='regist_sort'>아이디</p>
            <div className='sort_root'>
              <div>
                <img src="" alt="" className='sub_img'/>
              </div>
              <div>
                <input
                  className='sort_field'
                  type="text"
                  name='id'
                  placeholder='아이디를 입력하세요'
                  onChange={changeMember}
                />
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
          {/* 비밀번호 */}
          <div className='regist_margin'>
            <p className='regist_sort'>비밀번호</p>
            <div className='sort_root'>
              <div>
                <img src="" alt="" className='sub_img'/>
              </div>
              <div>
                <input
                  className='sort_field'
                  type="password"
                  name='password'
                  placeholder='비밀번호를 입력하세요'
                  onChange={changeMember}
                />
              </div>
              <div>
                <button type='button' className='sort_btn'>
                  <img src="" alt="" className='sort_img'/>
                </button>
              </div>
            </div>
            <div style={{marginTop: '5px'}}>
              <p><span id='pw_check' className='check'></span></p>
              <p>비밀번호는 <span className='worning'>8자리에서 16자리</span>로 입력해주세요</p>
              <p><span className='worning'>영문(대소문자), 숫자, 문자의 조합</span>으로 입력해주세요</p>
            </div>
          </div>
          {/* 이름 */}
          <div className='regist_margin'>
            <p className='regist_sort'>이름</p>
            <div className='sort_root'>
              <div>
                <img src="" alt="" className='sub_img'/>
              </div>
              <div>
                <input
                  className='sort_field'
                  type="text"
                  name='name'
                  placeholder='이름을 입력하세요'
                  onChange={changeMember}
                />
              </div>
              <div>
                <button type='button' className='sort_btn'>
                  <img src="" alt="" className='sort_img'/>
                </button>
              </div>
            </div>
            <div style={{marginTop: '5px'}}>
              <p><span id='name_check' className='check'></span></p>
            </div>
          </div>
          {/* 생일 & 성별 */}
          <div className='regist_margin'>
            <div style={{display: "flex"}}>
              <p className='regist_sort'>생년월일</p>
              <p className='regist_sort' style={{marginLeft: '325px'}}>성별</p>
            </div>
            <div className='sort_root' style={{border: 0, padding: 0}}>
              <div className='sort_root' style={{width: '360px', marginTop: 0}}>
                <div>
                  <img src="" alt="" className='sub_img'/>
                </div>
                <input
                  className='sort_field'
                  type="text"
                  name='birth'
                  style={{width: '280px'}}
                  placeholder='생년월일을 입력하세요'
                />
              </div>
              <div style={{display: 'flex', marginLeft: '10px'}}>
                <div className='gen'>
                  <input
                    type="button"
                    value='F'
                    name='gen_F'
                    className='gen_btn'
                    onClick={genSelect}
                  />
                </div>
                <div className='gen' style={{marginLeft: '10px'}}>
                  <input
                    type="button"
                    value='M'
                    name='gen_M'
                    className='gen_btn'
                    onClick={genSelect}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 주소 */}
          <div className='regist_margin'>
            <p className='regist_sort'>주소</p>
            <div className='sort_root_address'>
              <div style={{display: "flex"}}>
                <input
                  className='zipCode'
                  name="zonecode"
                  type="text"
                  value={zoneCode}
                />
                {zipCode(handleAddress)}
              </div>
              <div className='address_div'>
                <input
                  type="text"
                  className="address_input"
                  name="address1"
                  value={address}
                />
              </div>
              <div className='address_div'>
                <input
                  type="text"
                  className="address_input"
                  name="address2"
                />
              </div>
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
