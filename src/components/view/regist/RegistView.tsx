import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MemberRegist from "../../api/member/MemberRegist";

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
    switch (event.target.name) {
      case "m_id":
        setMember({ ...member, id: value });
        break;
      case "m_pass":
        setMember({ ...member, password: value });
        break;
      case "m_name":
        setMember({ ...member, name: value });
        break;
      case "m_address":
        setMember({ ...member, address: value });
        break;
    }
    console.log(member);
  };

  return (
    <div>
      <h1>Here is RegistView</h1>
      <table>
        <tr>
          <th>id</th>
          <th>password</th>
          <th>name</th>
          <th>address</th>
        </tr>
        <tr>
          <td>
            <input type="text" name="m_id" onChange={changeMember} />
          </td>
          <td>
            <input type="password" name="m_pass" onChange={changeMember} />
          </td>
          <td>
            <input type="text" name="m_name" onChange={changeMember} />
          </td>
          <td>
            <input type="text" name="m_address" onChange={changeMember} />
          </td>
        </tr>
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
    </div>
  );
};

export default RegistView;
