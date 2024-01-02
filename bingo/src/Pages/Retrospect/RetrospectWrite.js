import styled from "styled-components";
import RetrospectWriteText from "./Components/RetrospectWriteText";
import TeamEvaluation from "./Components/TeamEvaluation";
import { DialerSip } from "@mui/icons-material";
import { Div } from "../../Components/NormalComponents/Section";

const Container = styled.div`
    height: 100vh;
    overflow-y: auto;
`;

// 회고 작성 프로세스 : 회고 작성 -> 팀 이벨류에이션 작성 과정을 한꺼번에 관리
// 사용자의 회고 데이터를 받아와서 한번에 보여주게 하기 위함
function RetrospectWrite() {
    return (
        <Div
            display="block"
            flexDirection="column"
            width="100%"
            height="93.9vh"
            back
            style={{
                overflow: "hidden",
            }}
        >
            {/* 회고 작성 페이지 */}
            <RetrospectWriteText />
            {/* 팀 평가 페이지 */}
            <TeamEvaluation />
        </Div>
    );
}

export default RetrospectWrite;
