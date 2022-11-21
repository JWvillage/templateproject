import React from "react";

interface Props {
  imgList: any[];
}

const SlideImg: React.FC<Props> = ({ imgList }) => {
  const [count, setCount] = React.useState(0);
  const [customInterVal, setCustomInterVal] = React.useState(3000);

  React.useEffect(() => {
    const c = document.getElementsByTagName("img")[0];
    c.style.display = "flex";
  }, []);

  React.useEffect(() => {
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
      <div style={{ position: "absolute", alignSelf: "end", width: "250px" }}>
        {imgList.map((content, i) => {
          const btnId = "btn_" + i;
          return (
            <button className='tag_ImgBtn' key={i} id={btnId} value={i} onClick={btnImg}>
              o
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SlideImg;
