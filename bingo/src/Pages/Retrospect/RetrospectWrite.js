import { Div } from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";
import Editor from "./Editor";

function RetrospectWrite() {
    return (
        // 전체 총괄 Div
        <Div alignItems="center" justifyContent="center" flexDirection="column" backgroundColor="whitesmoke" height="100vh">
            <P fontSize="30px" fontWeight="bolder">회고 작성하기</P>
            <Editor />
            {/* 왜 계속 충돌이 날까요잉 */}
        </Div>
    );
}

export default RetrospectWrite;x