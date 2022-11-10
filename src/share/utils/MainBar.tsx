import { useNavigate } from "react-router-dom";

const MainBar = () => {
  const navigate = useNavigate();

  return (
    <>
      {sessionStorage.getItem("loginId") !== null ? (
        <>
          <h1>Logout</h1>
          <button
            onClick={() => {
              sessionStorage.removeItem("loginId");
              navigate("/");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Not Login</h1>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/regist");
            }}
          >
            Regist
          </button>
        </>
      )}
    </>
  );
};

export default MainBar;
