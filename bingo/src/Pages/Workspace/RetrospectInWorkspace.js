import { useState } from "react";
import { Div } from "../../Components/NormalComponents/Section";
import { Img } from "../../Components/NormalComponents/Etc";
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
    </>
  );
}

export default RetrospectInWorkspace ;