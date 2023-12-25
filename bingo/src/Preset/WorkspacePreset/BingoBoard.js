import { Div } from "../../Components/NormalComponents/Section";

function BingoBoard() {
  const letters = ['열정적인', '친근한', '멋있는', '잘생긴', '참신한', '재밌는', '안정적인', '섹시한', '귀여운'];
  return(
    <>
      {letters.map((letter) => (
        <Div
          key={letter}            
            width="33%"
            height="33%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid black"
        >
          {letter}
        </Div>
      ))}
    </>
  );
}

export default BingoBoard ;