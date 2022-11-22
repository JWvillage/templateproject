import React from "react";
import { Login } from "../../api";
import { Main } from "../../view";
import { useNavigate } from "react-router-dom";
import { Member } from "../../../store";

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
    const loginMember = Login.instance.memberLogin(member.id, member.password);
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
      {loginSucc === "" ? (
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
          <button
            type="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Main
          </button>
        </div>
      ) : (
        <Main />
      )}
    </>
  );
};

export default LoginView;
