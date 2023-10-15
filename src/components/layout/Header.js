import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
    return (
        <Warpper>
            <Inner>
                <Logo>STUDIOUP</Logo>
                <Nav>
                    <NavLink to="/">Home</NavLink>
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
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: end;
`;

const Inner = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.nav`
    font-size: 2rem;
`

const Nav = styled.nav`
    width: 370px;
    display: flex;
    justify-content: space-between;
`