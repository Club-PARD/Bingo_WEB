import React from "react";
import styled from "styled-components";
import { Div } from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";
import WorkspaceCard from "./WorkspaceCard";
import { Button } from "../../Components/NormalComponents/Form";
import { Img } from "../../Components/NormalComponents/Etc";

// 불러온 값 저장하기
const WorkspaceData = [
    {
        name : "Hello",
        desc : "3!4! Bingo!",
        period : "231111 ~ 231111",
    },
    {
        name : "Longcurtion",
        desc : "힘냅시다..",
        period : "231111 ~ 231111",
    },
    {
        name : "명성",
        desc : "맛있어",
        period : "231111 ~ 231111",
    },
    {
        name : "맹륜진사갈비",
        desc : "맹구 마지막 우승",
        period : "130512 ~ ",
    },
];

const Home =()=> {
    return(
        <>
            {/* 상단바 부분 */}
            <Div flexDirection="row" justifyContent="space-between" padding="1%" alignItems="center">
                {/* 빙고 로고, 현재 페이지 이름 표시 부분 */}
                <Div flexDirection="row">
                    <Img src="/img/Home/logo.jpg" width={"10%"}/>
                    <P fontSize="30px" fontWeight="bolder" marginRight="10px">현재 워크스페이스</P>
                </Div>
                {/* 새 워크스페이스 생성 버튼 */}
                <Button borderRadius="5px" padding="1%" fontWeight="bolder" fontSize="15px">새 워크스페이스 생성</Button>
            </Div>
            <hr />
            {/* 워크스페이스 카드 부분 */}
            <Div
                flexDirection="row"
                justifyContent="center"
            >
                {/* 현재는 더미값이지만 장기적으로는 워크스페이스 데이터 기반으로 카드 출력  */}
                {WorkspaceData.map((workspace, index) => (
                    <WorkspaceCard
                        key={index}
                        name={workspace.name}
                        desc={workspace.desc}
                        period={workspace.period}
                    />
                ))}
            </Div>
        </>
        
    )
}

export default Home;