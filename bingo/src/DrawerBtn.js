import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import styled from 'styled-components';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Profile = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  flex-direction : column;
  padding-bottom : 10%;
`
const ProfileImg = styled.img`
  width : 70%;
  height : 70%;
`
const Username = styled.div`
  font-weight : bold;
  font-size : 20px;
  padding : 1%;
`
const UserTask = styled.div`
  font-size : 15px;
  padding : 1%;
`

// 사이드바에 적용할 아이콘을 목록화 시켜서 사용함
// 배열의 앞쪽부터 순차적으로 사용됨
const iconArray = [HomeIcon, GroupsIcon, MailIcon, LogoutIcon];

// 메뉴에서의 경로 이동에 사용함
const menuItems = [
  { text: '홈', path: '/Home' },
  { text: '워크스페이스', path: '/WorkspaceList' },
  { text: '회고 목록', path: '/RetrospectList' },
  { text: '로그아웃', path: '/' },
];

// 불러온 사용자 데이터가 담길 공간. axios 연동을 위해 json 더미 형태로 선언
const UserData = [
  {
      name : "사용자 이름",
      task : "사용자 직책",
  },
];

const drawerWidth = "20%";

const DrawerHeader = ({ handleDrawerClose }) => (
  <div>
    <IconButton onClick={handleDrawerClose}>
      <ChevronLeftIcon />
    </IconButton>
  </div>
);

export default function DrawerBtn() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <DrawerHeader handleDrawerClose={handleDrawerClose} />
        <Divider />
        {/* 사용자 프로필 부분 */}
        <Profile>
            {/* 프로필 이미지, 이 부분도 추후 서버에서 가져오는 값을 사용할 수 있는 형태로 만들기 */}
            <ProfileImg src='/img/Profile/profileimg.jpg' alt='프로필 이미지'/>
            {/* 사용자 정보와 직책 */}
            <Username>{UserData[0].name}</Username>
            <UserTask>{UserData[0].task}</UserTask>
        </Profile>
        <Divider />
        <List>
        {menuItems.map((menuItem) => (
            <ListItem key={menuItem.text} disablePadding>
            <ListItemButton component={Link} to={menuItem.path} onClick={handleDrawerClose}>
                <ListItemIcon>
                {React.createElement(iconArray[menuItems.indexOf(menuItem) % iconArray.length])}
                </ListItemIcon>
                <ListItemText primary={menuItem.text} />
            </ListItemButton>
            </ListItem>
        ))}
        </List>
      </Drawer>
    </Box>
  );
}