import {Button, Fieldset, Input, Legend} from "../Components/NormalComponents/Form";
import {Div} from "../Components/NormalComponents/Section";
import {P} from "../Components/NormalComponents/Text";
import { ID, PW } from "../Preset/LoginPreset";
import {Textarea} from '../Components/NormalComponents/Form'

function PI_Test() {
    return (
        <Div
            justifyContent="center"
            alignItems="center"
            width="100wh"
            height="100vh"
            backgroundColor="#F5F5DC"
            flexDirection="column">
            <Fieldset>
                <Legend fontSize="20px" align="left" padding="0px 20px">타이틀</Legend>
                <P>안녕하세요</P>
                <br />
                <P>Textarea 테스트입니다.</P>
                <Textarea></Textarea>
            </Fieldset>


            {/* <Div>
                <Div
                    borderRadius="25px"
                    justifyContent="center"
                    alignItems="center"
                    color="black"
                    backgroundColor="gray"
                    width="300px"
                    height="300px"
                    margin="20px">

                    <P>Div 태그입니다.</P>

                </Div>
                <Div
                    borderRadius="25px"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="gray"
                    color="black"
                    width="300px"
                    height="300px"
                    margin="20px">

                    <P fontSize="30px" color="white" fontWeight="bold">Div 태그입니다.</P>

                </Div>
            </Div>
            <Div>
                <Div
                    borderRadius="25px"
                    justifyContent="space-around"
                    alignItems="center"
                    backgroundColor="gray"
                    color="black"
                    width="640px"
                    height="100px"
                    margin="20px">
                    <Button>기본 버튼</Button>
                    <Button fontSize="20px" width="100px" height="40px" borderRadius="10px">꾸민 버튼</Button>

                </Div>
            </Div>
            <Div>
                <Div
                    borderRadius="25px"
                    justifyContent="center"
                    alignItems="center"
                    backgroundColor="gray"
                    flexDirection="column"
                    color="black"
                    width="640px"
                    height="150px">


                    <ID></ID>
                    <PW></PW>

                    <Div alignItems="center" width="300px" height="30px" justifyContent="end">
                        <Button width="80px" height="20px" borderRadius="5px">로그인</Button>
                        <Button width="80px" height="20px" borderRadius="5px">회원가입</Button>
                    </Div>

                </Div>
            </Div> */}

        </Div>

    );
}



export default PI_Test;