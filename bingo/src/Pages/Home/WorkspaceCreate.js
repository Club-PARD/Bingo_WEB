/* eslint-disable */

import { Link } from "react-router-dom";
import { Div } from "../../Components/NormalComponents/Section.js";
import { Img } from "../../Components/NormalComponents/Etc.js"
import { Button, Input } from "../../Components/NormalComponents/Form.js";
import React, { useState, useRef } from "react";
import { Label } from "../../Components/NormalComponents/Text.js"; 


function WorkspaceCreate() {
    const [title, setTitle] = useState('');
    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const [introduce, setIntroduce] = useState('');
    const onChangeIntroduce = (event) => {
        setIntroduce(event.target.value);
    };

    const [newProfileImage, setNewProfileImage] = useState("/img/test1.png");
    const profileImageRef = useRef();

    

    
    return (
        <>
            <Div alignItems="center" flexDirection=" column" justifyContent="space-evenly">
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
                <Div flexDirection="column"
                alignItems="center">
                    <Label>워크 스페이스의 소개를 적으세요:</Label>
                    <Input type="text"
                        placeholder="워크스페이스 소개를 작성하시오"
                        value={introduce}
                        onChange={onChangeIntroduce}border="1px solid black"
                        height="100px"
                        />
                </Div>
                <Div flexDirection=" column" alignItems="center">
                    <Div
                    onClick={() => profileImageRef.current.click()}>
                        프로필 사진 바꾸기
                    </Div>
                    <Input
                        type="file"
                        style={{ display: "none" }}
                        ref={profileImageRef}
                        onChange={(e) => {
                        if (e.target.files.length > 0) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                            setNewProfileImage(reader.result);
                            };
                            reader.readAsDataURL(e.target.files[0]);
                        }
                        }}
                    />
                    <Img width="100px"
                    height="100px"
                    src={newProfileImage} />
                </Div>
            </Div>
        </>
    );
}

export default WorkspaceCreate;

