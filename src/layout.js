import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/layout/Header';
import Foouter from './components/layout/Footer';

function Layout() {
    return (
         <>
            <Header />
            <Main>
                <Outlet/>
            </Main>
            <Foouter />
        </>
    )
}

export default Layout;

const Main = styled.main`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;