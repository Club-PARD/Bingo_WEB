import { Outlet } from "react-router";
import styled from "styled-components";

function TopMenuBar(){
    return(
        <>
            <header>
                <Header>
                    <Menubar>
                    </Menubar>
                </Header>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default TopMenuBar;

const Header = styled.div`
    background-color: #FAFAFA;
    width: 100vw;
    height: 0;
    border-bottom: 1px solid;
    border-color: #DBDBDB;
    display: flex;
    align-items: center;
    background-color: antiquewhite;
`;
const Menubar = styled.div`
    margin: 0 25vw;
    width: 50vw;
    height: 40%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 0;

    @media (min-width: 451px) and (max-width: 750px) {
        margin: 0 30vw;
        width: 40vw;
    }
    @media (max-width: 450px) {
        margin: 0 20vw;
        width: 60vw;
    }
`;
