import React from "react";
import { Member } from "../../../mapstore";

interface Props {
  member: Member | undefined;
}

const Main: React.FC<Props> = ({ member }) => {
  return (
    <>
      {member != undefined ? (
        <div>
          <h1>Here is Main Page</h1>
          <ul>
            <li>Id : {member.id}</li>
            <li>Password :{member.password}</li>
            <li>Name : {member.name}</li>
            <li>Type : {member.type}</li>
          </ul>
        </div>
      ) : (
        <Main member={undefined} />
      )}
    </>
  );
};

export default Main;
