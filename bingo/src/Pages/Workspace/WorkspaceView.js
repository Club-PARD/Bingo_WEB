import { Link } from "react-router-dom";
import {Div} from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";
import { Button } from "../../Components/NormalComponents/Form";

function Workspace() {
    return (
        <Div flexDirection="column">
            <P>생성된 워크 스페이스 페이지입니다.</P>
            <Link to="/RetrospectCreate">
                <Button>회고 생성하기</Button>
            </Link>
            <Link to="/RetrospectView">
                <Button>회고 리스트 보러가기</Button>
            </Link>
        </Div>
    );
}

export default Workspace;