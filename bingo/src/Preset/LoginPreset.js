import { Button, Input } from "../Components/NormalComponents/Form";
import { Div } from "../Components/NormalComponents/Section";
import { Label } from "../Components/NormalComponents/Text";

function ID() {
    return (
        <Div
            alignItems="center"
            width="300px"
            height="50px"
            justifyContent="space-between">
            <Label margin="0px 10px 0px 0px" fontSize="20px" fontWeight="bold">아이디</Label>
            <Input type="text" placeholder="ID"></Input>
        </Div>
    );
}
function PW() {
    return (
        <Div
            alignItems="center"
            width="300px"
            height="50px"
            justifyContent="space-between">
            <Label margin="0px 10px 0px 0px" fontSize="20px" fontWeight="bold">비밀번호</Label>
            <Input type="text" placeholder="PW"></Input>
        </Div>
    );
}

function LoginBtn() {
    return(
        <Button fontSize="20px" width="100px" height="40px" borderRadius="10px">Login</Button>
    );
}


export { PW, ID, LoginBtn };