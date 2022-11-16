import { useLocation } from "react-router-dom";
import { MainBar, ScrollTop } from "../../../share";
import {SearchBar} from "../../../share";
import React, {useState} from "react";
import {SearchView, TopBar} from "../ui";
import BasicModal from "../../../share/utils/BasicModal";


const Main = () => {
  const { state } = useLocation();
  const [searchValue, setSearchValue] = useState()

  const search = (searchVal: any) => {
    setSearchValue(searchVal)
  };

  const loginCheck = () => {
    const loginMember = sessionStorage.getItem("loginId");

    let member = null;

    if (loginMember !== null) {
      member = JSON.parse(loginMember);
    }

    return member !== null && state?.newLogin !== "logout" && (
      <>
        <h3>LoginMember</h3>
        <SearchView member={member} />
      </>
    )
  };

  const searchCheck = () => {
    return ( searchValue != null && (
        <BasicModal title='SearchMember' content={searchValue} op={true}/>
      )
    )
  }

  return (

    <>
      <TopBar />
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h1>Here is Main Page</h1>
        <div>
          <SearchBar search={search} searchOptions={ ['ID', 'Pass'] }/>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <div>
          <MainBar />
        </div>
        <div style={{display: "flex", flexDirection: "column"}}>
          {loginCheck()}
          {searchCheck()}
        </div>
      </div>
      <ScrollTop />
    </>
  );
};

export default Main;