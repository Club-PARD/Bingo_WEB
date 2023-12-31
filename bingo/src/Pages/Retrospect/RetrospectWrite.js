import styled from "styled-components";
import RetrospectWriteText from "./Components/RetrospectWriteText";
import TeamEvaluation from "./Components/TeamEvaluation";
import { DialerSip } from "@mui/icons-material";
import { Div } from "../../Components/NormalComponents/Section";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getRetrospect, getTemplate } from "../../Api/Retrospace";
import { retrospectQuestionsListState } from "../../Contexts/Atom";
import { useRecoilState } from "recoil";

const Container = styled.div`
    height: 100vh;
    overflow-y: auto;
`;

// 회고 작성 프로세스 : 회고 작성 -> 팀 이벨류에이션 작성 과정을 한꺼번에 관리
// 사용자의 회고 데이터를 받아와서 한번에 보여주게 하기 위함
function RetrospectWrite() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get("userId");
    const workspaceId = queryParams.get("workspaceId");
    const retrospectId = queryParams.get("retrospectId");

    const [retrospectQuestionsList, setRetrospectQuestionsList] =
        useRecoilState(retrospectQuestionsListState);
    const [isOpenPage, setIsOpenPage] = useState(false);

    const handleChangeOpenPage = () => {
        setIsOpenPage((prevIsOpenPage) => !prevIsOpenPage);
    };

    useEffect(() => {
        const retrospectResult = async () => {
            try {
                const retrospectDataForWrite = await getTemplate({
                    workspaceId: workspaceId,
                    retrospectId: retrospectId,
                });

                if (retrospectDataForWrite && retrospectDataForWrite.questionList) {
                    const modifiedData = {
                        ...retrospectDataForWrite,
                        questionList: retrospectDataForWrite.questionList.map((question) => {
                            if (!question.subQuestions || question.subQuestions.length === 0) {
                                // subQuestions가 없는 경우, 더미(sub-question) 추가
                                return {
                                    ...question,
                                    subQuestions: [{ subQuestion: "", answerResponse: "" }],
                                };
                            }
                            return question;
                        }),
                    };

                    setRetrospectQuestionsList(modifiedData);
                }
            } catch (error) {
                console.error("Error fetching retrospectWrite:", error);
            }
        };

        retrospectResult();
    }, [userId, workspaceId, retrospectId]);

    // console.log("RetrospectWrite 페이지 : retrospectQuestionsList Data", retrospectQuestionsList);

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
            <RetrospectWriteText
                userId={userId}
                workspaceId={workspaceId}
                retrospectId={retrospectId}
            />
            {/* 팀 평가 페이지 */}
            {/* <TeamEvaluation userId={userId} workspaceId={workspaceId} retrospectId={retrospectId} /> */}
        </Div>
    );
}

export default RetrospectWrite;
