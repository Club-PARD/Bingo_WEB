import { Input } from "../Components/NormalComponents/Form";
import { Div } from "../Components/NormalComponents/Section";
import { Label } from "../Components/NormalComponents/Text";

function KPT() {
    return (
        <Div flexDirection="column">
            <Div
                // flexDirection="column"
                justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                <Label margin="0px 10px 0px 0px" width="20%">Keep</Label>
                <Input
                    type="text"
                    placeholder="회고 제목을 입력해주세요."
                    border="2px solid blue"
                    width="70%"/>
            </Div>
            <Div
                // flexDirection="column"
                justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                <Label margin="0px 10px 0px 0px" width="20%">Problem</Label>
                <Input
                    type="text"
                    placeholder="회고 제목을 입력해주세요."
                    border="2px solid blue"
                    width="70%"/>
            </Div>
            <Div
                // flexDirection="column"
                justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                <Label margin="0px 10px 0px 0px" width="20%">Try</Label>
                <Input
                    type="text"
                    placeholder="회고 제목을 입력해주세요."
                    border="2px solid blue"
                    width="70%"/>
            </Div>

        </Div>
    );
};

function FFF() {
    return (
        <Div flexDirection="column">
            <Div
                // flexDirection="column"
                justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                <Label margin="0px 10px 0px 0px" width="20%">Fact</Label>
                <Input
                    type="text"
                    placeholder="회고 제목을 입력해주세요."
                    border="2px solid blue"
                    width="70%"/>
            </Div>
            <Div
                // flexDirection="column"
                justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                <Label margin="0px 10px 0px 0px" width="20%">Feeling</Label>
                <Input
                    type="text"
                    placeholder="회고 제목을 입력해주세요."
                    border="2px solid blue"
                    width="70%"/>
            </Div>
            <Div
                // flexDirection="column"
                justifyContent="space-between" alignItems="center" border="1px solid black" width="500px" margin="10px 0px" padding="10px" borderRadius="10px">
                <Label margin="0px 10px 0px 0px" width="20%">Future Action</Label>
                <Input
                    type="text"
                    placeholder="회고 제목을 입력해주세요."
                    border="2px solid blue"
                    width="70%"/>
            </Div>

        </Div>
    );
};

export { KPT, FFF };