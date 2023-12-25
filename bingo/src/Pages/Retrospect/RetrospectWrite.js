import { Div } from "../../Components/NormalComponents/Section";
import { P } from "../../Components/NormalComponents/Text";
import DrawerBtn from "../../DrawerBtn";
import Editor from "./Editor";

function RetrospectWrite() {
    return (
        < >
            {/* 전체 총괄 Div */}
            <Div alignItems="center" flexDirection="row" backgroundColor="whitesmoke" height="10vh" paddingLeft="3%">
                <DrawerBtn />
                <P fontSize="30px" fontWeight="bolder">회고 작성하기</P>
            </Div>
            <Div alignItems="center" justifyContent="center" flexDirection="column" backgroundColor="whitesmoke" height="90vh">
                <Editor />
            </Div>
        </>
        
    );
}

export default RetrospectWrite;