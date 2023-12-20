import { Link } from "react-router-dom";
import { Div } from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";
import { Button } from "../../Components/NormalComponents/Form";

function RetrospectList() {
    return (
        <Div>
            <P>작성된 회로 리스트 페이지입니다.</P>
            <Link to = "/RetrospectView"><Button>광일이 회고 보러 가기</Button></Link>

        </Div>
    );
}

export default RetrospectList;