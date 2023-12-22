import { Link } from "react-router-dom";
import {Div} from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";
import { Button } from "../../Components/NormalComponents/Form";

function WorkspaceView() {
    return (
        <Div flexDirection="column" alignItems="center" justifyContent="space-evenly"
        height="100vh">
            <Div>생성된 워크 스페이스 페이지입니다.</Div>
            <Div>
                <Link to="/RetrospectCreate">
                    <Button>회고 생성하기</Button>
                </Link>
            </Div>
            <Div>
                <Button>회고 참가자 초대하기</Button>
            </Div>
            <Div>
                <Link to="/RetrospectView">
                    <Button>회고 리스트 보러가기</Button>
                </Link>
            </Div>
        </Div>
    );
}

export default WorkspaceView;