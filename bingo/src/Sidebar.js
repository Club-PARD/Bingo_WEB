/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useLocation } from 'react-router';

export default function Sidebar() {
  // 전체에서 로그인화면을 제외하기 위해서 useLocation을 사용할 예정이고, 그에 따라서 location을 통해 상태관리
  const location = useLocation();
  // 현재 위치가 root일 경우에는 사이드바를 적용하지 않음
  if(location.pathname === '/') {
    return null;
  }

  // useState를 통해서 현재 상태를 관리하기
  // bool 형식의 변수를 통해 현재 사이드바가 어느 쪽에서 활성화되어있는지 체크한다
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // anchor는 사이드바가 나올 방향, open은 열렸는지에 대한 여부를 나타낸다
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // 실제로 사이드바에 표시될 내용을 정의함
  // 안에 나오는 아이콘들은 mui를 참고하여 변경하면 됨
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>test</div>
      <Divider />
      <List>
        {['Home', 'WorkSpace'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>

          {/* SwipeableDrawer는 마우스를 해당 위치로 가져갔을 때 나오는 기능, 현재는 막아두었음 */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}