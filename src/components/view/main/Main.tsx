import {SlideImg} from "../../../share";
import React from "react";
import { TopBar } from "../ui";


const Main = () => {

  const imgSrc = '/static/img/';

  let imgList = [];

  for (var i = 0; i < 10; i++) {
    imgList.push(imgSrc + i + '번.jpg')
  }

  return (
    <>
      <TopBar />
      <div style={{justifyContent: 'center', display: 'flex', marginTop: '100px'}}>
        <SlideImg imgList={imgList} />
      </div>
    </>
  );
};

export default Main;