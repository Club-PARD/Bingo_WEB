import React from "react";
import styled from "styled-components";
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Whole = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    padding : 7%;
`;

const WholeBox = styled.div`
    display : flex;
    align-items: center;
    flex-direction : column;
    text-align :center;
    background-color: #F9F9F9;
    width: 30vw;
    height: 65vh;
    border-radius: 36px;
    border: 2px solid transparent;
`;

const LogoImg = styled.img`
    width : 15%;
    padding : 7%;
`;

const ProfileBox = styled.div`
    height : 25vh;
    width : 10vw;
    margin : 5%;
`;

const ProfileImgBox = styled.div`
    border : 1px solid transparent;
    border-radius : 24px;
    height : 70%;
    background-color : #EFEFEF;
    margin-bottom : 5%;
    display : flex;
    justify-content : center;
    align-items : center;
`;

const ProfileImg = styled.img`
    border-radius : 50%;
    border : 1px solid red;
    width : 50%;
`;

const ProfileName = styled.div`
    border : 1px solid transparent;
    border-radius : 24px;
    height : 25%;
    background-color : #EFEFEF;
    display : flex;
    justify-content : center;
    align-items : center;
`;

const NameSpace = styled.div`
    // 추가적인 스타일링이 필요하다면 여기에 작성
`;
const CheckText = styled.div`
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    color: #222222;
`
const Approve = styled.button`
    border: 1px solid ${({ disabled }) => (disabled ? "#CCCCCC" : "#EA4336")};
    background-color: ${({ disabled }) => (disabled ? "#CCCCCC" : "#EA4336")};
    border-radius: 40px;
    color: ${({ disabled }) => (disabled ? "#999999" : "white")};
    font-size: 20px;
    width: 35%;
    height: 8%;
    margin: 5%;
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const CheckBox = ({ handleChange, isChecked }) => (
    <div>
        <Checkbox {...label} checked={isChecked} onChange={handleChange} />
    </div>
);

const UserApprove = () => {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleCheckBoxChange = (event) => {
        setIsChecked((prevChecked) => !prevChecked);
    };
    

    const isButtonEnabled = isChecked;

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        // 이 부분을 추가해서 체크박스 상태를 최신화
        setIsChecked(event.target.value === 'a');
    };

    //const isButtonEnabled = selectedValue === 'a';

    const CheckBox = ({ handleChange }) => (
        <div>
            <Checkbox {...label} onChange={handleChange} />
        </div>
    );

    return (
        <Whole>
            <WholeBox>
                <LogoImg src="/img/UserApprove/Logo_UserApprove.png" />
                <div style={{ color: "#222222" }}>
                    입력하신 내용으로<br />
                    빙고 계정을 생성할까요?
                </div>
                <ProfileBox>
                    <ProfileImgBox>
                        <ProfileImg src="img/UserApprove/Logo_Circle.png" />
                    </ProfileImgBox>
                    <ProfileName>
                        {/* 프로필 이름 관련 내용 추가 */}
                    </ProfileName>
                </ProfileBox>
                {/* <CheckBox /> */}
                <CheckText>
                    <CheckBox handleChange={handleCheckBoxChange} isChecked={isChecked} />
                    동의하고 가입하기 버튼을 누르는 것으로
                </CheckText>
                <CheckText>
                    빙고 이용 약관과 개인정보 처리 방침에 동의합니다.
                </CheckText>
                <Approve disabled={!isButtonEnabled}>
                    동의하고 가입하기
                </Approve>
            </WholeBox>
        </Whole>
    );
};

export default UserApprove;
