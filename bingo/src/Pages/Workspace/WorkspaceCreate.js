/* eslint-disable */

import { Div } from "../../Components/NormalComponents/Section.js";
import { Img } from "../../Components/NormalComponents/Etc.js"
import { Input } from "../../Components/NormalComponents/Form.js";
import React, { useState, useRef } from "react";
import { Label } from "../../Components/NormalComponents/Text.js"; 

//워크스페이스를 만드는 모달창
function WorkspaceCreate() {
    //제목과 소개, 사진은 이후 서버와 연결해 주고받을 것
    //따라서 useState로 상태관리, 지금은 더미데이터로
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
            {/* 모달 안의 전체 Div */}
            <Div alignItems="center" flexDirection=" column" justifyContent="space-evenly" display="flex" padding="5%">
                <Div flexDirection="column" alignItems="center" padding="2%">
                    <Label>Name of Workspace</Label>
                    <Input type="text"
                        placeholder="Beeingo" 
                        border="1px solid black"
                        value={title}
                        onChange={onChangeTitle}
                        />
                </Div>
                <Div flexDirection="column" alignItems="center" padding="2%">
                    <Label>Description of Workspace</Label>
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
                        Profile Image
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

