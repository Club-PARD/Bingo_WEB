import React from "react";
import { Div } from "../../Components/NormalComponents/Section";
import { Link } from "react-router-dom";
import BingoBoard from "../../Preset/WorkspacePreset/BingoBoard";

function Bingo() {
  return(
    <>
      <Div 
        width="100vw" 
        height="100vh" 
        flexDirection="row"
      >
        {/*Left Space width=415px*/}
        <Div flexDirection="column" height="100%" width="20%" backgroundColor="#D9D9D9">
            <Div 
                width="46%" 
                height="8%" 
                margin=" 4% 0 10% 11%"
                fontFamily="Inter"
                fontSize="60px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="150%"
            >BINGO</Div>
            <Div
                margin="0 0 2% 10%"
                fontFamily="Inter"
                fontSize="35px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="150%"
            >메인</Div>
            <Link to="/bingo">
              <Div
                  margin="0 0 2% 10%"
                  fontFamily="Inter"
                  fontSize="35px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="150%"
              >빙고</Div>
            </Link>
            <Div
                margin="0 0 2% 10%"
                fontFamily="Inter"
                fontSize="35px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="150%"
            >회고</Div>
        </Div>
        {/*Right spacce, for Bingo board*/}
        <Div width="80vw" height="100vh" flexWrap="wrap" justifyContent="center" alignItems="center">
          <BingoBoard/>

        </Div>
      </Div>
    </>
  );
}

export default Bingo;