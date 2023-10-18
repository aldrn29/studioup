import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
    return (
        <Warpper>
            <Inner>
                <NavLink to="/"><h1>STUDIO_UP</h1></NavLink>
                <Nav>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/works">Works</NavLink>
                    <NavLink to="/process">Process</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </Nav>
            </Inner>
        </Warpper>
    )
}

export default Header;

const Warpper = styled.div`
    width: 100%;
    height: 10vh;
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: end;
    background-color: rgba(0,0,0,0);
`;

const Inner = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > 
`;

const Nav = styled.nav`
    width: 320px;
    display: flex;
    justify-content: space-between;
`