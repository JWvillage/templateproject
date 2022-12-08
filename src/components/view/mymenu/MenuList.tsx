import React, {useState} from 'react';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore
} from "@mui/icons-material"
import {useNavigate} from "react-router-dom";


const MenuList = () => {

  const navigate = useNavigate()

  const [open, setOpen] = useState(false);
  const [keyVal, setKeyVal] = useState("")

  const handleClick = (value: string) => {
    setKeyVal(value)
    if (keyVal === '') {
      setOpen(!open);
    } else if (keyVal === value || !open) {
      setOpen(!open);
    }
  };

  // const menu = new Menu()
  // console.log(menu.menuList)

  // Test용 더미
  const menu = [
    {
      menuId: "ds98fh3o4hf9823o0001",
      menuName: "개인정보관리",
      menuLevelValue : "1",
      menuCode: "A10000",
      showIndicator: true,
      fullMenuName: "개인정보관리",
      parentMenuCode: "ROOT",
      parentMenuName: "MyPage",
      screenPathText: "/MyPage/WritingInfo",
      subMenuList: [
        {
          menuId: "ds98fh3o4hf9823o0002",
          menuName: "비밀번호 수정",
          menuLevelValue : "2",
          menuCode: "A10100",
          showIndicator: true,
          fullMenuName: "개인정보관리 > 비밀번호 수정",
          parentMenuCode: "A10000",
          parentMenuName: "개인정보관리",
          screenPathText: "/MyPage/WritingInfo/PassModify",
          subMenuList: []
        },
        {
          menuId: "ds98fh3o4hf9823o0003",
          menuName: "회원정보 수정",
          menuLevelValue : "2",
          menuCode: "A10200",
          showIndicator: true,
          fullMenuName: "개인정보관리 > 회원정보 수정",
          parentMenuCode: "A10000",
          parentMenuName: "개인정보관리",
          screenPathText: "/MyPage/WritingInfo/MemberInfoModify",
          subMenuList: []
        },
        {
          menuId: "ds98fh3o4hf9823o0004",
          menuName: "펫 등록",
          menuLevelValue : "2",
          menuCode: "A10300",
          showIndicator: true,
          fullMenuName: "개인정보관리 > 펫 등록",
          parentMenuCode: "A10000",
          parentMenuName: "개인정보관리",
          screenPathText: "/MyPage/WritingInfo/PetRegistration",
          subMenuList: []
        },
        {
          menuId: "ds98fh3o4hf9823o0005",
          menuName: "시터 신청",
          menuLevelValue : "2",
          menuCode: "A10400",
          showIndicator: true,
          fullMenuName: "개인정보관리 > 시터 신청",
          parentMenuCode: "A10000",
          parentMenuName: "개인정보관리",
          screenPathText: "/MyPage/WritingInfo/SitterApplication",
          subMenuList: []
        }
      ]
    },
    {
      menuId: "ds98fh3o4hf9823o0006",
      menuName: "내가 쓴 글 보기",
      menuLevelValue : "1",
      menuCode: "A20000",
      showIndicator: true,
      fullMenuName: "내가 쓴 글 보기",
      parentMenuCode: "ROOT",
      parentMenuName: "MyPage",
      screenPathText: "/MyPage/WritingInfo",
      subMenuList: [
        {
          menuId: "ds98fh3o4hf9823o0007",
          menuName: "이용 후기",
          menuLevelValue : "2",
          menuCode: "A20100",
          showIndicator: true,
          fullMenuName: "내가 쓴 글 보기 > 이용 후기",
          parentMenuCode: "A20000",
          parentMenuName: "내가 쓴 글 보기",
          screenPathText: "/MyPage/WritingInfo/Review",
          subMenuList: [
            {
              menuId: "ds98fh3o4hf9823o0008",
              menuName: "입양 후기",
              menuLevelValue : "3",
              menuCode: "A20101",
              showIndicator: true,
              fullMenuName: "내가 쓴 글 보기 > 이용 후기 > 입양 후기",
              parentMenuCode: "A20100",
              parentMenuName: "내가 쓴 글 보기 > 이용 후기",
              screenPathText: "/MyPage/WritingInfo/Review",
              subMenuList: []
            },
            {
              menuId: "ds98fh3o4hf9823o0009",
              menuName: "시터 후기",
              menuLevelValue : "3",
              menuCode: "A20102",
              showIndicator: true,
              fullMenuName: "내가 쓴 글 보기 > 이용 후기 > 시터 후기",
              parentMenuCode: "A20100",
              parentMenuName: "내가 쓴 글 보기 > 이용 후기",
              screenPathText: "/MyPage/WritingInfo/Review/MemberInfoModify",
              subMenuList: []
            },
            {
              menuId: "ds98fh3o4hf9823o00a",
              menuName: "구매 후기",
              menuLevelValue : "3",
              menuCode: "A20103",
              showIndicator: true,
              fullMenuName: "내가 쓴 글 보기 > 이용 후기 > 구매 후기",
              parentMenuCode: "A20100",
              parentMenuName: "내가 쓴 글 보기 > 이용 후기",
              screenPathText: "/MyPage/WritingInfo/Review/PetRegistration",
              subMenuList: []
            },
          ]
        },
        {
          menuId: "ds98fh3o4hf9823o000b",
          menuName: "시터 페이지",
          menuLevelValue : "2",
          menuCode: "A20200",
          showIndicator: true,
          fullMenuName: "내가 쓴 글 보기 > 시터 페이지",
          parentMenuCode: "A20000",
          parentMenuName: "내가 쓴 글 보기",
          screenPathText: "/MyPage/WritingInfo/Review/SitterApplication",
          subMenuList: [
            {
              menuId: "ds98fh3o4hf9823o000c",
              menuName: "생성",
              menuLevelValue : "3",
              menuCode: "A20201",
              showIndicator: true,
              fullMenuName: "내가 쓴 글 보기 > 시터 페이지 > 생성",
              parentMenuCode: "A20400",
              parentMenuName: "내가 쓴 글 보기 > 시터 페이지",
              screenPathText: "/MyPage/WritingInfo/SitterApplication/creation",
              subMenuList: []
            },
            {
              menuId: "ds98fh3o4hf9823o0010",
              menuName: "수정",
              menuLevelValue : "3",
              menuCode: "A20202",
              showIndicator: true,
              fullMenuName: "내가 쓴 글 보기 > 시터 페이지 > 수정",
              parentMenuCode: "A20400",
              parentMenuName: "내가 쓴 글 보기 > 시터 페이지",
              screenPathText: "/MyPage/WritingInfo/SitterApplication/modify",
              subMenuList: []
            },
          ]
        }
      ]
    },
  ]

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="my-menu"
      key='menu_list'
      subheader={
        <ListSubheader
          component="div"
          id="my-menu"
          key='menu_list_subheader'
        >
          <ListItemButton style={{textAlign: "center"}} onClick={() => {
            navigate('/myMenu')
          }}>
            <ListItemText primary="My Menu" className='menu_root'/>
          </ListItemButton>
        </ListSubheader>
      }
    >
      {
        menu.map((one, i) => {
          return (
              <>
                <ListItemButton className='menuList' key={one.menuCode + i + 'btn'} onClick={() => {
                  handleClick(one.menuCode)
                }}>
                  <ListItemText key={one.menuCode + i + 'text'} primary={one.menuName} />
                  {open && keyVal === one.menuCode ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {one.subMenuList !== null ?
                    one.subMenuList.map((two, j) => {
                      return (
                          <Collapse key={two.menuCode + j} in={open && two.parentMenuCode === keyVal} timeout="auto"
                                    unmountOnExit>
                            <List className='menuList' key={two.menuCode + j + 'List'} component="div" disablePadding>
                              <ListItemButton key={two.menuCode + j + 'btn'} sx={{pl: 4}}>
                                <ListItemText key={two.menuCode + j + 'text'} primary={two.menuName}/>
                              </ListItemButton>
                            </List>
                          </Collapse>
                      )
                    }) : <></>}
              </>
          )
        })
      }
    </List>
  );
};

export default MenuList;