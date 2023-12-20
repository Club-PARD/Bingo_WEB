import { Link } from "react-router-dom";
import { Div } from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";
import { Button } from "../../Components/NormalComponents/Form";

function WorkspaceCreate() {
    return (
        <Div>
            <P>워크스페이스 생성 페이지입니다.</P>
            <Link to = "/WorkspaceList"><Button>생성하기</Button></Link>

        </Div>
    );
}

export default WorkspaceCreate;