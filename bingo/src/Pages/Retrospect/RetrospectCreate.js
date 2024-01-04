import { useRecoilState } from "recoil";
import {Div} from "../../Components/NormalComponents/Section";
import { WorkspaceData, WorkspaceInfo, UrlInfo} from "../../Contexts/Atom";
import {Section1, Section2} from "../../Preset/Retrospect/RetrospectCreatePreset";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export default function RetrospectCreate() {

    const retrospectDataInit = {
        name: "",
        templateType: "KPT",
        tagList: [],
        userId: null,
        projectId : null,
        questionRequestList: [
            {
                id: null,
                mainQuestion: "Keep",
                subQuestionList : ["", "", ""]
            },{
                id: null,
                mainQuestion: "Problem",
                subQuestionList : ["", "", ""]
            }    ,{
                id: null,
                mainQuestion: "Try",
                subQuestionList : ["", "", ""]
            }    
                
        ]
    }
    const [retrospectData, setRetrospectData] = useState(retrospectDataInit);

    // handleMyConfirm : 회고 생성 버튼 클릭 시 실행되는 핸들러
    // URL의 변수 추출 관련
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const workspaceId = searchParams.get("workspaceId");
    const userId = searchParams.get("userId");
    const [workspaceData, setWorkspaceData] = useRecoilState(WorkspaceData);
    const filteredWorkspaces = workspaceData.find(
        (workspace) => workspace.id == workspaceId
    );
    const [workspaceInfo, setWorkspaceInfo] = useRecoilState(WorkspaceInfo);
    const [urlInfo, setUrlInfo] = useRecoilState(UrlInfo);
    const urlInfoInit = {
        userId: userId,
        workspaceId: workspaceId
    }
    useEffect(() => {
        // 초기화 된 상태값을 사용하면서 불필요한 useEffect 호출을 막습니다.
        if (workspaceId && userId) {
            setUrlInfo(urlInfoInit);
            const tempArray = { ...retrospectData };
            tempArray.userId = urlInfoInit.userId;
            tempArray.projectId = urlInfoInit.workspaceId;
            setRetrospectData(tempArray);
            setWorkspaceInfo(filteredWorkspaces);
        }
    }, []);

    return (
        <Div
            display="block"
            flexDirection="column"
            width="100%"
            height="93.9vh"
            backgroundColor="#F9F9F9"
            overflow="hidden"
        >
            {/* 타이틀 작성 및 템플릿 선택 */}
            <Section1
                retrospectData={retrospectData}
                setRetrospectData={setRetrospectData}/> {/* 질문 작성 */}
            <Section2
                retrospectData={retrospectData}
                setRetrospectData={setRetrospectData}/>
        </Div>
    );
}