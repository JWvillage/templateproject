import { useNavigate } from "react-router-dom";

const MainBar = () => {
  const navigate = useNavigate();

  const loginMember = sessionStorage.getItem("loginId")
  return (
    <>
      {loginMember !== null ? (
        <div className='login_Btn_Group'>
          <p style={{fontSize: '16px', paddingRight: '10px'}}>
            {JSON.parse(loginMember).name} 회원님
          </p>
          <button className='login_Btn'
            onClick={() => {
              sessionStorage.removeItem("loginId");
              navigate("/", { state: { newLogin: "logout" } });
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className='login_Btn_Group'>
          <button className='login_Btn'
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button className='login_Btn'
            onClick={() => {
              // navigate("/beforeRegist");
              navigate("/regist");
            }}
          >
            Regist
          </button>
        </div>
      )}
    </>
  );
};

export default MainBar;
