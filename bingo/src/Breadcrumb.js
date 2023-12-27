import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

// 디버깅 시 클릭 여부를 알기 위한 기능
function handleClick(event) {
  event.preventDefault();
  console.info('breadcrumb을 누르셨습니다!');
}

export default function Breadcrumb({ activeKey }) {
    let breadcrumbs = [];
    // activeKey에 따라 순서를 정함
    // 1인 경우 (회고 작성 페이지)
    if (activeKey === 1) {
      breadcrumbs = [
        <Typography key="1" color="text.primary" style={{ fontSize: '30px', fontWeight: 'bolder' }}>
            회고 작성
        </Typography>,
        <Link underline="hover" key="2" color="inherit" href="/" onClick={handleClick} style={{ fontSize: '30px' }}>
            팀 이벨류에이션
        </Link>,
        <Link underline="hover" key="3" color="inherit" onClick={() => (window.location.href = "/workspaceView", handleClick)} style={{ fontSize: '30px' }}>
            회고 조회
        </Link>,
      ];
      // 2인 경우 (회고 팀 이벨류에이션 페이지)
    } else if (activeKey === 2) {
        breadcrumbs = [
            <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick} style={{ fontSize: '30px' }}>
                회고 조회
            </Link>,
            <Typography key="2" color="text.primary" style={{ fontSize: '30px', fontWeight: 'bolder' }}>
                팀 이벨류에이션
            </Typography>,
            <Link underline="hover" key="3" color="inherit" onClick={() => (window.location.href = "/workspaceView", handleClick)} style={{ fontSize: '30px' }}>
                회고 조회
            </Link>,
          ];

          // 1인 경우 (회고 조회 페이지)
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
  
    // 실제로 화면에 출력되는 부분
    return (
      <Stack spacing={2}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="large" />} aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    );
  }