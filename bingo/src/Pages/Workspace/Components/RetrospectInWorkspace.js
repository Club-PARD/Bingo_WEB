import {useState} from "react";
import {Div} from "../../../Components/NormalComponents/Section";
import {Img} from "../../../Components/NormalComponents/Etc";
import Modal from "react-modal";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {RetrospectData, loginUserState} from "../../../Contexts/Atom";

//workspaceView화면 내 회고와 액션아이템 출력 컴포넌트
function RetrospectInWorkspace() {

    const [userInfo, setUserInfo] = useRecoilState(loginUserState);
    const [tasks, setTasks] = useRecoilState(RetrospectData);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const workspaceId = searchParams.get('workspaceId');

    const [modalIsOpen2, setModalIsOpen2] = useState(false);
    const openModal2 = () => {
        setModalIsOpen2(true);
    };

    const closeModal2 = () => {
        setModalIsOpen2(false);
    };

    return (
        <> {/*Div for retrospectList height=833*/
        } < Div height = "16%" width = "100%" backgroundColor = "#EEE" borderRadius = "20px" alignItems = "center" justifyContent = "center" margin = "1% 0 0 0" flexDirection = "column" onClick = {
            openModal2
        } > <Img width="50px" height="50px" src="/Img/WorkspaceView/ph_plus-bold.png"/>
        <div>회고생성</div>
    </Div>

            {
            tasks.length >= 1 && tasks
                .slice()
                .reverse()
                .map((task) => (
                    <RetrospectListDiv key={task.id}>
                        <Div
                            width="100%"
                            height="100%"
                            justifyContent="space-between"
                            alignItems="center"
                            flexDirection="column">
                            {/*회고 list의 상단, 몇차회고 작성버튼*/}
                            <LinkToRetrospectCreate2>
                                <Div fontSize="40px" textAlign="center" alignItems="center" margin="0 0 0 4%">{task.name}</Div>
                                {
                                    console.log(
                                        "\n사용자 : " + userInfo.appUser.id + "\n워크스페이스 : " + workspaceId + "\n회고 : " +
                                        task.id
                                    )
                                    // console.log("워크스페이스 " + )
                                }
                                <ViewButton to={task.linktoWrite}>작성</ViewButton>
                            </LinkToRetrospectCreate2>
                            {/*Div for 3 chip, 조회버튼*/}
                            <LinkToRetrospectView>
                                <Div
                                    width="12%"
                                    height="57%"
                                    borderRadius="50px"
                                    backgroundColor="#FC8C8C"
                                    alignItems="center"
                                    justifyContent="center"
                                    fontSize="24px"
                                    margin="0 0 0 1%">성실함</Div>
                                <Div
                                    width="12%"
                                    height="57%"
                                    borderRadius="50px"
                                    backgroundColor="#FDDD00"
                                    alignItems="center"
                                    justifyContent="center"
                                    fontSize="24px"
                                    margin="0 0 0 1%">즐거움</Div>
                                <Div
                                    width="12%"
                                    height="57%"
                                    borderRadius="50px"
                                    backgroundColor="#B0E81C"
                                    alignItems="center"
                                    justifyContent="center"
                                    fontSize="24px"
                                    margin="0 0 0 1%">피드백</Div>
                                <WriteButton to={task.linktoView}>조회</WriteButton>
                            </LinkToRetrospectView>
                        </Div>

                    </RetrospectListDiv>
                ))
        } {/*
    Modal size: width:584px, height:372px
    Modal show invite code to user, user can copy the code to click "복사"button
*/
        } < Modal isOpen = {
            modalIsOpen2
        }
        onRequestClose = {
            closeModal2
        }
        style = {{
              overlay: {
                  backgroundColor: "rgba(0, 0, 0,0.5)",                    
                  },
                  content: {
                      borderRadius: "12px",
                      padding:0,
                      color: "black",
                      background: `#D9D9D9`,
                      backgroundSize: "cover",
                      // backgroundRepeat: "no-repeat",
                      margin: "0",
                      width: "36%",
                      height: "26%",
                      display: "flex",
                      border: "none",
                      //alignItems: "center",
                      overflowY: "hidden",
                  
                      display: "flex",
                      flexDirection: "column",
                      overflowY: "auto",
              
                      
                      transform: "translate(89%, 125%)", // center the modal
                      //모달 내용이 부모 요소의 높이를 초과하면 자동으로 스크롤 바를 생성하도록 설정합니다. "overflowY: 'auto'"가 그 역할을 담당합니다.
              
                      // 또한, 모달의 높이(height)를 조정하여 모달의 내용이 충분하지 않을 경우 모달 자체의 높이를 줄일 수 있습니다.
                  },
              }} > <Div
            width="100%"
            height="100%"
            flexDirection="column"
            justifyContent="space-evenly"
            alignItems="center">
            <Div fontSize="45px">회고를 생성하시겠습니까?</Div>
            {/*버튼들*/}
            <Div
                width="100%"
                height="15%"
                flexDirection="row"
                justifyContent="center"
                alignItems="center">
                <CloseButton onClick={closeModal2}>취소</CloseButton>
                <Div width="1%" backgroundColor="#D9D9D9"></Div>
                <LinkToRetrospectCreate to="/RetrospectCreate">
                    <Div>확인</Div>
                </LinkToRetrospectCreate>
            </Div>
        </Div>
    </Modal>
</>
    );
}

export default RetrospectInWorkspace;

const LinkToRetrospectCreate = styled(Link)`
  width: 20%;
  height: 100%;
  font-size: 40px;
  background-color: #959595;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
const CloseButton = styled(Div)`
  width: 20%;
  height: 100%;
  font-size: 40px;
  background-color: #959595;
  color: white;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`
const RetrospectListDiv = styled.div `
  height: 16%;
  width: 100%;
  background-color: #D9D9D9;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  padding: 0;
`
const LinkToRetrospectCreate2 = styled.div `
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
`
const LinkToRetrospectView = styled.div `
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: right;
  padding: 0;
  align-items: center;
`
const ViewButton = styled(Link)`
  height: 100%;
  width: 20%;
  border-top-right-radius: 20px;
  background-color: #EEE;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  text-decoration: none;
  font-size: 24px;
  color: #787878;
`
const WriteButton = styled(Link)`
  height: 100%;
  width: 20%;
  border-bottom-right-radius: 20px;
  background-color: #EEE;
  align-items: center;
  text-align: center;
  justify-content: center;
  display: flex;
  text-decoration: none;
  font-size: 24px;
  color: #787878;
  margin-left: 2%;  
  border-top: 1px solid #D9D9D9;
`
