import { useState } from "react";
import { Div } from "../../Components/NormalComponents/Section";


function RetrospectInWorkspace(){
    const [tasks, setTasks] = useState([
      { id: 1, name: '작업 1', completed: true },
      { id: 2, name: '작업 2', completed: false },
    ]);
  
    // 작업 1 완료 처리
    const completeTask1 = () => {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === 1 ? { ...task, completed: true } : task
        )
      );
    };
  
  return(
    <>
      {/*Div for retrospectList and actionItem List */}
      <Div 
        width="100%" 
        height="50%" 
        flexDirection="row"
      >
        {/*Div for retrospectList*/}
        <Div 
          width="70%" 
          height="100%"
          flexDirection="column"
          margin="0 1%"
        >
          {tasks.map(task => (
            <Div 
              key={task.id}
              height="20%"
              width="100%"
              backgroundColor="#D9D9D9"
              borderRadius="15px"
              textAlign="center"
              alignItems="center"
              justifyContent="center"
              margin="1vh 0 0 0"
            >
              {task.name}
            </Div>
          ))}
        </Div>
        {/*Div for actionItem*/}
        <Div
          width="26%"
          height="100%"
          flexDirection="column"
        >
          {tasks.map(task => (
            <Div 
              key={task.id}
              height="20%"
              width="100%"
              backgroundColor="#D9D9D9"
              borderRadius="15px"
              textAlign="center"
              alignItems="center"
              justifyContent="center"
              margin="1vh 0 0 0"
            >
              {task.completed ? (
                <Div>
                  {task.name}의 액션 아이템
                </Div>
              ) : (
                <Div>
                  {task.name}의 액션 아이템이 없습니다.
                </Div>
              )}
            </Div>
          ))}
        </Div>
      </Div>
    </>
  );
}

export default RetrospectInWorkspace ;