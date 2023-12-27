/* eslint-disable */

import { Div } from "../../Components/NormalComponents/Section.js";
import styled from "styled-components";
import { Input } from "../../Components/NormalComponents/Form.js";
import React, { useState, useRef } from "react";
import { Label } from "../../Components/NormalComponents/Text.js"; 

//워크스페이스를 만드는 모달창
function WorkspaceCreate() {
    const [title, setTitle] = useState('');
    const onChangeTitle = (event) => {
    setTitle(event.target.value);
    };
    const [introduce, setIntroduce] = useState('');
    const onChangeIntroduce = (event) => {
        setIntroduce(event.target.value);
    };
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleButtonClick = () => {
        fileInputRef.current && fileInputRef.current.click();
    };
    
    return (
        <>
            {/* 모달 안의 전체 Div */}
            <Div alignItems="left" flexDirection=" column-reverse" justifyContent="space-between" width="100%" height="68%" >
                <Div flexDirection="column" >
                    <Div fontSize="42px" margin=".5% 0 0 0"
                    >프로젝트 배너 이미지</Div>
                    <Input
                        type="file"
                        style={{ display: "none" }}
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                    />
                    <Div alignItems="center">
                        <FileInputButton onClick={handleButtonClick}>+파일 업로드</FileInputButton>
                        {selectedFile && (
                            <SelectedFileName>{selectedFile.name}</SelectedFileName>
                        )}
                    </Div>
                </Div>
                <Div flexDirection="column">
                    <Label fontSize="42px">프로젝트 생성</Label>
                    <Input type="text"
                        width="100%"
                        height="150px"
                        backgroundColor="#D9D9D9"
                        margin=".5% 0 0 0"
                        fontSize="42px"
                        value={introduce}
                        onChange={onChangeIntroduce}
                        />
                </Div>
                <Div flexDirection="column">
                    <Label fontSize="42px">프로젝트 이름</Label>
                    <Input type="text"
                        width="100%"
                        height="75px"
                        backgroundColor="#D9D9D9"
                        margin=".5% 0 0 0"
                        fontSize="42px"
                        value={title}
                        onChange={onChangeTitle}
                        />
                </Div>
                
                
            </Div>
        </>
    );
}

export default WorkspaceCreate;

const FileInputButton = styled.button`
    height: 50px;
    width: 13%;
    font-size: 32px;
    background-color: #D9D9D9;
    align-items: center;
    border-radius: 24px;
    margin-top: .5%;
    border: none;
`

const SelectedFileName = styled.span`
    font-size: 24px;
    margin-left: 10px;
`;