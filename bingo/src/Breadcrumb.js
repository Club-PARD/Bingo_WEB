import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb({ activeKey }) {
    let breadcrumbs = [];
  
    // activeKey에 따라 순서를 정함
    if (activeKey === 1) {
      breadcrumbs = [
        <Typography key="1" color="text.primary" style={{ fontSize: '30px', fontWeight: 'bolder' }}>
            회고 작성
        </Typography>,
        <Link underline="hover" key="2" color="inherit" href="/" onClick={handleClick} style={{ fontSize: '30px' }}>
            팀 이벨류에이션
        </Link>,
        <Link underline="hover" key="3" color="inherit" href="/material-ui/getting-started/installation/" onClick={handleClick} style={{ fontSize: '30px' }}>
            회고 조회
        </Link>,
      ];
    } else if (activeKey === 2) {
        breadcrumbs = [
            <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} style={{ fontSize: '30px' }}>
                회고 조회
            </Link>,
            <Typography key="2" color="text.primary" style={{ fontSize: '30px', fontWeight: 'bolder' }}>
                팀 이벨류에이션
            </Typography>,
            <Link underline="hover" key="3" color="inherit" href="/material-ui/getting-started/installation/" onClick={handleClick} style={{ fontSize: '30px' }}>
                회고 조회
            </Link>,
          ];
    } else if (activeKey === 3) {
        breadcrumbs = [
            <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} style={{ fontSize: '30px' }}>
                회고 작성
            </Link>,
            <Link underline="hover" key="2" color="inherit" href="/material-ui/getting-started/installation/" onClick={handleClick} style={{ fontSize: '30px' }}>
                팀 이벨류에이션
            </Link>,
            <Typography key="3" color="text.primary" style={{ fontSize: '30px', fontWeight: 'bolder' }}>
                회고 조회
            </Typography>,
          ];
    }
  
    return (
      <Stack spacing={2}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="large" />} aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    );
  }