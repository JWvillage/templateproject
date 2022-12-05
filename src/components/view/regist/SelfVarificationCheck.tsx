import React, {ChangeEvent, useState} from 'react';
import {
  linkSms,
  validate
} from "../../../share/utils/Utility";
import {GroupAdd} from "@mui/icons-material";
import {TopBar} from "../ui";
import {useNavigate} from "react-router-dom";

const SelfVarificationCheck = ({urlPath= ''}) => {

  const navigate = useNavigate()

  const [selfCheckValue, setSelfCheckValue] = useState({
    name : '',
    phoneNumber: '',
    birthDay: ''
  })

  const [useOtpNumber, setUseOtpNumber] = useState('')
  const [type, setType] = useState('noCheck')

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    if ( name === 'mobile3')
      setSelfCheckValue({...selfCheckValue, phoneNumber : phoneFirstNumber + "-" + phoneMiddleNumber + "-" + value})
    else
      setSelfCheckValue({...selfCheckValue,[ name ] : value})
  }

  // 전화번호
  const [phoneFirstNumber, setPhoneFirstNumber] = useState('')
  const [phoneMiddleNumber, setPhoneMiddleNumber] = useState('')

  const options = [
    '010', '011'
  ]

  const selfVarification = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target
    if (value === useOtpNumber) {
      setType('check')
      navigate(urlPath)
    }
  }

  return (
    <>
      <TopBar />
      <div className='regist_Root' style={{height: '1100px'}}>
        <div className='regist_Frm' style={{marginBottom: '10px'}}>
          <div>
            <img src="/static/img/main_logo.png" alt="" style={{width: '250px'}}/>
          </div>
          <div className='regist_margin' hidden={type === 'noCheck'}>
            <p className='regist_sort'>이름</p>
            <div className='sort_root'>
              <div>
                <img src="/static/img/subIcon.png" alt="" className='sub_img'/>
              </div>
              <div>
                <input
                    className='sort_field'
                    type="text"
                    id='name'
                    name='name'
                    placeholder='이름을 입력하세요'
                    onChange={changeValue}
                />
              </div>
              <div>
                <button type='button' className='sort_btn'>
                  <img src="/static/img/lockIcon.png" alt="" className='sort_img'/>
                </button>
              </div>
            </div>
            <div style={{marginTop: '5px'}}>
              <p><span id='name_check' className='check'></span></p>
            </div>
          </div>
          <div className='regist_margin'>
            <p className='regist_sort'>전화번호</p>
            <div className='sort_root' style={{border: 0, padding: 0}}>
              <div>
                <select
                    id="mobile1"
                    name="mobile1"
                    className="sort_field_mobile"
                    defaultValue={phoneFirstNumber}
                    onChange={(e) => setPhoneFirstNumber(e.target.value)}
                    style={{width: '95px', margin: '0 12px 0 0 '}}
                >
                  <option value="">선택</option>
                  {options.map((content, i) => {
                    return <option key={i} value={content}>{content}</option>
                  })}
                </select>
              </div>
              -
              <div>
                <input
                    id="mobile2"
                    name="mobile2"
                    type="text"
                    className="sort_field_mobile"
                    onChange={(e) => {
                      setPhoneMiddleNumber(e.target.value)
                    }}
                    maxLength={4}
                />
              </div>
              -
              <div>
                <input
                    id="mobile3"
                    name="mobile3"
                    type="text"
                    className="sort_field_mobile"
                    onChange={changeValue}
                    maxLength={4}
                />
              </div>
            </div>
            <div style={{marginTop: '5px'}}>
              <p><span id='mobile_check' className='check'></span></p>
            </div>
          </div>
          <div className='regist_margin'>
            <div style={{display: "flex"}}>
              <p className='regist_sort'>생년월일</p>
            </div>
            <div className='sort_root' style={{border: 0, padding: 0}}>
              <div className='sort_root' style={{width: '360px', marginTop: 0}}>
                <div>
                  <img src="/static/img/subIcon.png" alt="" className='sub_img'/>
                </div>
                <input
                    className='sort_field'
                    type="text"
                    id='birthDay'
                    name='birthDay'
                    style={{width: '280px'}}
                    placeholder='생년월일을 입력하세요'
                    onBlur={validate}
                    onChange={changeValue}
                />
              </div>
              <div style={{marginTop: '5px'}}>
                <p><span id='birthDay_check' className='check'></span></p>
              </div>
            </div>
          </div>
          <div className="member_Btn_div">
            <div>
              <p style={{fontSize: '30px', fontWeight: 'bold'}}>본인 인증</p>
            </div>
            <button className="login_Btn_Icon" onClick={(e) => {
              e.preventDefault();
              const otpNumber = (Math.random()*10000).toString().substring(0,4)
              setUseOtpNumber(otpNumber)
              linkSms(selfCheckValue.phoneNumber, otpNumber)
            }}>
              <GroupAdd />
            </button>
          </div>
          {/* 본인 인증 */}
          <div className='regist_margin' hidden={type === 'Check'}>
            <p className='regist_sort'>본인 인증</p>
            <div className='sort_root'>
              <div>
                <img src="/static/img/subIcon.png" alt="" className='sub_img'/>
              </div>
              <div>
                <input
                    className='sort_field'
                    type="text"
                    id='otp'
                    name='otp'
                    placeholder='인증번호를 입력하세요'
                    onBlur={selfVarification}
                />
              </div>
              <div>
                <button type='button' className='sort_btn'>
                  <img src="/static/img/lockIcon.png" alt="" className='sort_img'/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfVarificationCheck;