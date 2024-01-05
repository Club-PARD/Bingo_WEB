import { Div } from "../../Components/NormalComponents/Section";
import { useState } from "react";
import { ChipData, UserList } from "../../Contexts/Atom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Img } from "../../Components/NormalComponents/Etc";
import ArrowRed from "../../assets/Img/WorkspaceView/arrowRed.png";
import "../../font.css";
//Bingopage에 띄울 빙고판 생성 component
//배열에 들어있는 text는 추후 기획에게 받을 예정
//9개의 형용사가 회고 때 체크되면 체크된 형용사의 flag가 True로 변함
function BingoBoard({ modalIsOpen }) {
    const [chipData, setChipData] = useRecoilState(ChipData);
    const [usrList, setUserList] = useRecoilState(UserList);
    const IsRetrospect = false;
    console.log("ChipData", chipData);
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
    // console.log("modal: " + modalIsOpen);
    // console.log("Retro: " + IsRetrospect);
    return (
        <>
            <ParentDiv isRetrospect={IsRetrospect} modalIsOpen={modalIsOpen}>
                {chipData.map((item, index) =>
                    item.flag ? (
                        <ChildDivFlagTrue key={item.label}>
                            {item.label.split("\n").map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}
                        </ChildDivFlagTrue>
                    ) : (
                        <ChildDiv key={item.label}>
                            {item.label.split("\n").map((line, i) => (
                                <div key={i}>{line}</div>
                            ))}
                        </ChildDiv>
                    )
                )}
            </ParentDiv>
            {!modalIsOpen && !IsRetrospect && (
                <AdRetero>
                    회고 작성하고 빙고판 채우러 가기
                    <Img width="2.6vh" height="2.6vh" src={ArrowRed} />
                </AdRetero>
            )}
        </>
    );
}

export default BingoBoard;

const ParentDiv = styled.div`
    width: 36vh;
    height: 36vh;
    display: flex;
    justify-content: top;
    flex-wrap: wrap;
    align-items: center;
    padding: 0%;
    margin-top: ${(props) =>
        !props.modalIsOpen && !props.isRetrospect ? "-50vh" : "0.8vh"};
    margin-bottom: ${(props) =>
        !props.modalIsOpen && !props.isRetrospect ? "-70vh" : "0vh"};
`;

const ChildDiv = styled.div`
    box-sizing: border-box;
    width: 13vh;
    height: 13vh;
    border-radius: 50%;
    margin: 0 -1.3vh -0.9vh 0;
    display: flex;
    font-family: "140";
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1.8vh;
    color: #ea4336;
    flex-direction: column;
    background-color: #f3f3f3;
    border: 1px solid #ea4336;
    position: relative;
`;

const ChildDivFlagTrue = styled(ChildDiv)`
    box-sizing: border-box;
    width: 13vh;
    height: 13vh;
    border-radius: 50%;
    margin: 0 -1.3vh -0.9vh 0;
    display: flex;
    font-family: "140";
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1.8vh;
    border: 1px solid #ea4336;
    position: relative;
    background-color: #ea4336;
    color: #f9f9f9;
`;
const AdRetero = styled.div`
    position: relative;
    width: 14vw;
    height: 4vh;
    padding: 0.9vh 1.8vh;
    margin-bottom: 5vh;
    border-radius: 40px;
    background: var(--main_red, #ea4336);
    align-items: center;
    justify-content: center;
    display: flex;
    color: var(--main_white, #f9f9f9);
    font-family: "160";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    z-index: 1;
`;
