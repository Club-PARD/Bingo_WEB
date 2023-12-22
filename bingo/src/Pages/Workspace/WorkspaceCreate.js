/* eslint-disable */

import { Link } from "react-router-dom";
import { Div } from "../../Components/NormalComponents/Section";
import { Img } from "../../Components/NormalComponents/Etc.js"
import { Button, Input } from "../../Components/NormalComponents/Form";
import React, { useState, useRef } from "react";


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

    const generateRandomValue = () => {
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let randomValue = '';
        const length = 6; // 6자리 난수 생성
    
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomValue += characters.charAt(randomIndex);
        }
    };

    const onButtonClick = () => {
        generateRandomValue();
    };
    return (
        <>
            <Div alignItems="center" flexDirection=" column" justifyContent="space-evenly" height="100vh" width="100vw">
                <Div>워크스페이스 생성 페이지입니다.</Div>
                <Div flexDirection="column"
                alignItems="center">
                    <label>워크 스페이스의 이름을 적으세요:</label>
                    <Input type="text"
                        placeholder="Beeingo" 
                        value={title}
                        onChange={onChangeTitle}
                        border="1px solid black"
                        />
                </Div>
                <Div flexDirection="column"
                alignItems="center">
                    <label>워크 스페이스의 소개를 적으세요:</label>
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
                <Link to = "/WorkspaceList">
                    <Button onClick={onButtonClick}>생성하기</Button>
                </Link>
            </Div>
        </>
    );
}

export default WorkspaceCreate;

