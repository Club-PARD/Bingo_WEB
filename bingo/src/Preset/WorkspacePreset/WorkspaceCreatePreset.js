import { Link } from "react-router-dom";
import {Button} from "../../Components/NormalComponents/Form";
import { Div } from "../../Components/NormalComponents/Section";
import { Label } from "../../Components/NormalComponents/Text";
import { Input } from "../../Components/NormalComponents/Form";
import { useState } from "react";

function WorkspaceCreateLargestDiv() {
    return (
      <Div alignItems="center" flexDirection=" column" justifyContent="space-evenly" height="100vh" width="100vw"></Div>
    );
}

function WorkspaceCreateName() {
  const [title, setTitle] = useState('');
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };
  return (
    <Div flexDirection="column"
      alignItems="center">
        <Label>워크 스페이스의 이름을 적으세요:</Label>
        <Input type="text"
            placeholder="Beeingo" 
            border="1px solid black"
            value={title}
            onChange={onChangeTitle}
            />
    </Div>
  );
}

export {WorkspaceCreateLargestDiv, WorkspaceCreateName} ;