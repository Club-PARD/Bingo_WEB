import React from "react";
import styled from "styled-components";
import { Div } from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";
import WorkspaceCard from "./WorkspaceCard";

// 불러온 값 저장하기
const Workspaces = [
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
    }
];

const Home =()=> {
    return(
        <>
            <Div
                flexDirection="row"
            >
                {/* 현재는 더미값이지만 장기적으로는 워크스페이스 데이터 기반으로 카드 출력  */}
                {Workspaces.map((workspace, index) => (
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