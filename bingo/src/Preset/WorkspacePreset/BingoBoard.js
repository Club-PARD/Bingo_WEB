import { Div } from "../../Components/NormalComponents/Section";

function BingoBoard() {
  const items = [
    { text: '열정적인', flag: true },
    { text: '친근한', flag: false },
    { text: '멋있는', flag: true },
    { text: '잘생긴', flag: false },
    { text: '참신한', flag: true },
    { text: '재밌는', flag: false },
    { text: '안정적인', flag: true },
    { text: '섹시한', flag: false },
    { text: '귀여운', flag: true },
  ];
  return(
    <>
      {items.map((item) => (
        <Div
          key={item.text}            
            width="33%"
            height="33%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid black"
            backgroundColor={item.flag ? 'red' : '#ccff66'}
        >
          {item.text}
        </Div>
      ))}
    </>
  );
}

export default BingoBoard ;