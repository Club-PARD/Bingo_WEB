import { Div } from "../../Components/NormalComponents/Section";
import { useState } from 'react';
import { ChipData, UserList } from "../../Contexts/Atom";
import { useRecoilState } from "recoil";

//Bingopage에 띄울 빙고판 생성 component
//배열에 들어있는 text는 추후 기획에게 받을 예정
//9개의 형용사가 회고 때 체크되면 체크된 형용사의 flag가 True로 변함
function BingoBoard() {
  const [chipData, setChipData] = useRecoilState(ChipData);
  const [usrList, setUserList] = useRecoilState(UserList);
/*
  const [items, setItems] = useState([
    { text: '존중하는', flag: true },
    { text: '열정적인', flag: false },
    { text: '도전적인', flag: false },
    { text: '의사소통이 잘 되는', flag: false },
    { text: '성실한', flag: false },
    { text: '인내심있는', flag: false },
    { text: '화목한', flag: false },
    { text: '분위기 좋은', flag: false },
    { text: '칭찬하는', flag: false },
  ]);
*/
  const handleItemClick = (index) => {
    setChipData(chipData.map((item, i) => 
      (i === index ? { ...item, flag: !item.flag } : item)
    ));
  };

  return(
    <>
      {chipData.map((item, index) => (
        <Div
          key={item.label}            
            width="30%"
            height="30%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid black"
            lineHeight="1"
            color="black"
            backgroundColor={item.flag ? '#FFF' : '#A3A3A3'}
            fontSize="20px"
        >
          {item.label}
        </Div>
      ))}
    </>
  );
}

export default BingoBoard ;