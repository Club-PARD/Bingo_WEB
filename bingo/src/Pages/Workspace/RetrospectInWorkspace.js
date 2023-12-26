import { useState } from "react";
import { Div } from "../../Components/NormalComponents/Section";
import { Img } from "../../Components/NormalComponents/Etc";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { Button } from "../../Components/NormalComponents/Form";


//workspaceView화면 내 회고와 액션아이템 출력 컴포넌트
function RetrospectInWorkspace(){

    // map 함수로 출력하기 위한 리스트(더미데이터) 생성
    // 나중에 추가 가능
    const [tasks, setTasks] = useState([
      { id: 1, name: '1차 회고'},
      { id: 2, name: '2차 회고'},
      { id: 3, name: '3차 회고'},
      { id: 4, name: '4차 회고'},
      { id: 5, name: '5차 회고'},
      { id: 6, name: '6차 회고'},
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
        width="100%" 
        height="833px"
        flexDirection="column"
        margin="0 1%"
      >
        <Div 
            height="82px"
            width="100%"
            backgroundColor="#EEE"
            borderRadius="8px"
            textAlign="center"
            alignItems="center"
            justifyContent="center"
            margin="2% 0 0 0"
            onClick={openModal2}
          >
            <Img width="50px" height="50px" src="/Img/WorkspaceView/ph_plus-bold.png"/>
          </Div>
        {tasks.slice().reverse().map((task) => (
          <Div 
            key={task.id}
            height="82px"
            width="100%"
            backgroundColor="#D9D9D9"
            borderRadius="8px"
            textAlign="center"
            alignItems="center"
            justifyContent="center"
            margin="2% 0 0 0"
          >
            <Div 
              width="94%"
              height="100%"
              justifyContent="space-between"
              alignItems="center"
              flexDirection="row"
              margin="0 3% 0 3%"
            >
              <Div
                fontSize="24px"
              >{task.name}</Div>
              {/*Div for 3 chip */}
              <Div
                width="42%"
                height="100%"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Div
                  width="31%"
                  height="34%"
                  borderRadius="50px"
                  backgroundColor="#FC8C8C"
                  alignItems="center"
                  justifyContent="center"
                >성실함</Div>
                <Div
                  width="31%"
                  height="34%"
                  borderRadius="50px"
                  backgroundColor="#FDDD00"
                  alignItems="center"
                  justifyContent="center"
                >즐거움</Div>
                <Div
                  width="31%"
                  height="34%"
                  borderRadius="50px"
                  backgroundColor="#B0E81C"
                  alignItems="center"
                  justifyContent="center"
                >피드백</Div>
              </Div>
            </Div>
            
          </Div>
        ))}
      </Div>

      {/*
    Modal size: width:584px, height:372px 
    Modal show invite code to user, user can copy the code to click "복사"button
*/}
      <Modal isOpen={modalIsOpen2} onRequestClose={closeModal2}
          style={{
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
                      width: "35%",
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
              }}
      >
        <Div
          width="100%"
          height="100%"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Div fontSize="25px">회고를 생성하시겠습니까?</Div>
          <Div width="43%" height="15%" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Button width="90px" height="25px" backgroundColor="#959595" color="white" borderRadius="8px" onClick={closeModal2}>취소</Button>
            <Link to="/RetrospectCreate">
              <Button width="90px" height="25px" backgroundColor="#959595" color="white" borderRadius="8px">확인</Button>
            </Link>
          </Div>
        </Div>
      </Modal>
    </>
  );
}

export default RetrospectInWorkspace ;