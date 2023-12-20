import { Link } from "react-router-dom";
import {Button} from "../../Components/NormalComponents/Form";
import {P} from "../../Components/NormalComponents/Text";
import { Div } from "../../Components/NormalComponents/Section";

function WorkspaceList() {
    return (
        <Div flexDirection = "column">
            <P>워크스페이스 리스트 페이지입니다.</P>
            <Link to="/WorkspaceCreate"><Button>워크스페이스 생성</Button></Link>
            
            <Link to="/Workspace"><Button>쓰리포 워크스페이스</Button></Link>
        </Div>

    );
}

export default WorkspaceList;