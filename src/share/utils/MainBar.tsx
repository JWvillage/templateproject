import { useNavigate } from "react-router-dom";

const MainBar = () => {
  const navigate = useNavigate();

  return (
    <>
      {sessionStorage.getItem("loginId") !== null ? (
        <div style={{display: "flex", flexDirection: "column"}}>
          <h3>Logout</h3>
          <button
            onClick={() => {
              sessionStorage.removeItem("loginId");
              navigate("/", { state: { newLogin: "logout" } });
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div style={{display: "flex", flexDirection: "column"}}>
          <h3>Not Login</h3>
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
        </div>
      )}
    </>
  );
};

export default MainBar;
