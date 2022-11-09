import React from "react";
import { Member } from "../../../mapstore";
import MemberMapStore from "../../../mapstore/map/MemberMapStore";
import { Login } from "../../api";
import { Main } from "../../view";

const LoginView = () => {
  const [member, setMember] = React.useState({
    id: "",
    password: "",
    name: "",
    type: "",
  });

  const loginHandle = (event: any) => {
    if (event.target.name == "userId") {
      member.id = event.target.value.toString();
    } else if (event.target.name == "userPass") {
      member.password = event.target.value.toString();
    }

    setMember({ ...member });
  };

  const [loginSucc, setLoginSucc] = React.useState("");

  const loginCheck = () => {
    const loginMember = Login.instance.memberLogin(member.id, member.password);
    if (loginMember) {
      setLoginSucc("Succ");
      setMember(loginMember);
    } else {
      setMember({ ...member, id: "", password: "" });
    }
  };

  return (
    <>
      {loginSucc == "" ? (
        <div>
          <input
            type="text"
            name="userId"
            id="userId"
            onChange={loginHandle}
            value={member.id}
          />
          <input
            type="text"
            name="userPass"
            id="userPass"
            onChange={loginHandle}
            value={member.password}
          />
          <button type="button" name="loginBtn" onClick={loginCheck}>
            Login
          </button>
        </div>
      ) : (
        <Main member={member} />
      )}
    </>
  );
};

export default LoginView;
