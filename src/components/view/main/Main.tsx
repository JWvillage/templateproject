import { MainBar, ScrollTop } from "../../../share";

const Main = () => {
  const loginMember = sessionStorage.getItem("loginId");

  let member = null;
  if (loginMember !== null) {
    member = JSON.parse(loginMember);
  }

  console.log("login : ", member);
  return (
    <>
      <MainBar />
      <h1>Here is Main Page</h1>
      {member !== null ? (
        <>
          <ul>
            <li>Id : {member.id}</li>
            <li>Password : {member.password}</li>
            <li>Name : {member.name}</li>
            <li>Address : {member.address}</li>
            <li>Type : {member.type}</li>
          </ul>
        </>
      ) : (
        ""
      )}
      <ScrollTop />
    </>
  );
};

export default Main;
