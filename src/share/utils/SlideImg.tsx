import React, {useEffect, useState} from "react";
import {
  NavigateBefore,
  NavigateNext
} from '@mui/icons-material';

interface Props {
  imgList: any[];
}

const SlideImg: React.FC<Props> = ({ imgList }) => {
  const [count, setCount] = useState(0);
  const [customInterVal, setCustomInterVal] = useState(3000);

  useEffect(() => {
    const c = document.getElementsByTagName("img")[0];
    c.style.display = "flex";
  }, []);

  useEffect(() => {
    if (customInterVal !== 10000) {
      const transTimer = setInterval(() => {
        if (count < imgList.length - 1) {
          setCount((count) => count + 1);
        } else {
          setCount(0);
        }
      }, customInterVal);
      const caroTags = document.getElementsByClassName("caroImg");
      for (var i = 0; i < caroTags.length; i++) {
        // @ts-ignore
        caroTags[i].style.display = "none";
      }
      const showImg = document.getElementById("caro" + count);
      // @ts-ignore
      showImg.style.display = "flex";
      return () => {
        clearInterval(transTimer);
      };
    } else {
      setCount((count) => count);
    }
  }, [count, customInterVal]);

  const btnImg = (el: any) => {
    const val: number = parseInt(el.target.value);
    setCount(val);
  };

  return (
    <div className="tab_Img">
      {imgList.map((content, i) => {
        const id = "caro" + i;
        return (
          <img
            className='caroImg'
            key={i}
            id={id}
            src={content}
            alt=''
            onMouseOver={() => {
              setCustomInterVal(10000);
            }}
            onMouseOut={() => {
              setCustomInterVal(2000);
            }}
          />
        );
      })}
      <div className='SlideImgBtn_root'>
        <NavigateBefore
          fontSize="small"
          style={{cursor: 'pointer'}}
          onClick={() => {
            const caroTags = document.getElementsByClassName("caroImg")
            if (count > 0)
              setCount(count => count - 1)
            else if (count === 0)
              setCount(count => caroTags.length - 1)
          }}
        />
        {imgList.map((content, i) => {
          const btnId = "btn_" + i;
          return (
            <button className='tag_ImgBtn' key={i} id={btnId} value={i} onClick={btnImg} />
          );
        })}
        <NavigateNext
          fontSize="small"
          style={{cursor: 'pointer'}}
          onClick={() => {
            const caroTags = document.getElementsByClassName("caroImg")
            if (count < caroTags.length - 1)
              setCount(count => count + 1)
            else if (count === caroTags.length - 1)
              setCount(count => 0)
          }}
        />
      </div>
    </div>
  );
};

export default SlideImg;
