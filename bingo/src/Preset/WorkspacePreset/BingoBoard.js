import { Div } from "../../Components/NormalComponents/Section";
import { useState } from 'react';

function BingoBoard() {
  const [items, setItems] = useState([
    { text: '열정적인', flag: true },
    { text: '친근한', flag: false },
    { text: '멋있는', flag: true },
    { text: '잘생긴', flag: false },
    { text: '참신한', flag: true },
    { text: '재밌는', flag: false },
    { text: '안정적인', flag: true },
    { text: '섹시한', flag: false },
    { text: '귀여운', flag: true },
  ]);

  const handleItemClick = (index) => {
    setItems(items.map((item, i) => 
      (i === index ? { ...item, flag: !item.flag } : item)
    ));
  };

  return(
    <>
      {items.map((item, index) => (
        <Div
          key={item.text}            
            width="calc(100% / 3)"
            height="calc(100% / 3)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="1px solid black"
            lineHeight="1"
            color={item.flag ? 'Black' : 'white'}
            fontSize="100px"
            onClick={() => handleItemClick(index)}
        >
          {item.text}
        </Div>
      ))}
    </>
  );
}

export default BingoBoard ;