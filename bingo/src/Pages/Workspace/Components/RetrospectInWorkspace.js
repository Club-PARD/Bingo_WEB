import { useState } from "react";
import { Div } from "../../../Components/NormalComponents/Section";
import { Img } from "../../../Components/NormalComponents/Etc";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import styled from "styled-components";


//workspaceView화면 내 회고와 액션아이템 출력 컴포넌트
function RetrospectInWorkspace(){

    // map 함수로 출력하기 위한 리스트(더미데이터) 생성
    // 나중에 추가 가능
    const [tasks, setTasks] = useState([
      { id: 1, name: '1차 회고', linktoView: '/RetrospectView', linktoWrite: '/RetrospectWriteText'},
      { id: 2, name: '2차 회고', linktoView: '/RetrospectView', linktoWrite: '/RetrospectWriteText'},
      { id: 3, name: '3차 회고', linktoView: '/RetrospectView', linktoWrite: '/RetrospectWriteText'},
      { id: 4, name: '4차 회고', linktoView: '/RetrospectView', linktoWrite: '/RetrospectWriteText'},
      { id: 5, name: '5차 회고', linktoView: '/RetrospectView', linktoWrite: '/RetrospectWriteText'},
      { id: 6, name: '6차 회고', linktoView: '/RetrospectView', linktoWrite: '/RetrospectWriteText'},
    ]);

    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const openModal2 = () => {
        setModalIsOpen2(true);
    };

    const closeModal2 = () => {
        setModalIsOpen2(false);
    };
  
  return(
    <>
      {/*Div for retrospectList height=833*/}
      
        <Div 
            height="15.5vh"
            width="100%"
            backgroundColor="#EEE"
            borderRadius="20px"
            alignItems="center"
            justifyContent="center"
            margin="1% 0 0 0"
            flexDirection="column"
            onClick={openModal2}
          >
            <Img width="44px" height="44px" src="/Img/WorkspaceView/ph_plus-bold.png"/>
            <WordDiv>회고생성</WordDiv>
          </Div>
        {tasks.slice().reverse().map((task) => (
            <RetrospectListDiv
              key={task.id}
            >
              <Div 
                width="100%"
                height="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexDirection="row"
              >
                {/*회고 list의 상단, 몇차회고 작성버튼*/}
                <LeftSide>
                  <Div
                    color="#7F7F7F"
                    fontWeight="400"
                    fontFamily="WefontGothic(OTF)"
                    fontSize="14px"
                    textAlign="center"
                    alignItems="center"
                    margin="0 0 3.8vh 0"
                  >{task.name}</Div>
                  <TwoResultChip>“서로에 대한 존중과 신뢰가 있는”</TwoResultChip>
                  <TwoResultChip>“열정 있는”</TwoResultChip>
                </LeftSide>
                {/*Div for 3 chip, 조회버튼*/}
                <RightSide>
                  
                  <ViewButton to={task.linktoWrite}>
                    작성
                    <Img width="2.6vh" height="2.6vh" src="/img/WorkspaceView/arrowPink.png"/>
                  </ViewButton>
                  <WriteButton to={task.linktoView}>
                    조회<Img width="2.6vh" height="2.6vh" src="/img/WorkspaceView/arrowPink.png"/>
                  </WriteButton>
                </RightSide>
              </Div>
              
          </RetrospectListDiv>
        ))}
    </>
  );
}

export default RetrospectInWorkspace ;
const WordDiv=styled.div`
  width: auto;
  height: 2.2vh;
  color: #6F6F6F;
  text-align: center;
  font-family: WefontGothic(OTF);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`
const RetrospectListDiv = styled.div`
  height: 15.5vh;
  width: 100%;
  background-color: rgba(234, 67, 54, 0.05);
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;
  box-sizing: border-box;
  padding: 2.3vh 2.5vh;
`
const LeftSide = styled.div`
  height: 11.4vh;
  width: auto;
`
const TwoResultChip=styled.div`
  width: auto;
  height: 2.6vh;
  color: #575757;
  font-family: WefontGothic(OTF);
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const RightSide = styled.div`
  height: 11vh;
  width: 5.5vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0;
  align-items: center;
  text-decoration: none;
`
const ViewButton = styled(Link)`
  height: 4.8vh;
  width: 5.5vw;
  border-radius: 40px;
  background: #FCE3E1;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  color: var(--main_red, #EA4336);
  font-family: WefontGothic(OTF);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
`
const WriteButton = styled(Link)`
  height: 4.8vh;
  width: 5.5vw;
  border-radius: 40px;
  background: #FCE3E1;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  color: var(--main_red, #EA4336);
  font-family: WefontGothic(OTF);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  text-decoration: none;
`
