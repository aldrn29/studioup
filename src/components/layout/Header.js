import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import media from '../../styles/media';
import menu from '../../assets/images/menu2.png';

function Header() {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = (open) => {
        setIsToggleOpen(open);
    };

    return (
        <Warpper>
            <Inner>
                <NavLink to="/"><h1 onClick={() => handleToggleOpen(false)}>Studio_up</h1></NavLink>
                <Nav isToggleOpen={isToggleOpen} onClick={() => handleToggleOpen(false)}>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/works">Works</NavLink>
                    <NavLink to="/process">Process</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </Nav>
                <Menu onClick={() => handleToggleOpen(true)}><img src={menu}/></Menu>
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

    ${ media.medium`
        height: auto;
    `}
`;

const Inner = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${ media.medium`
        width: 100%;
        flex-direction: column;
        padding: 10px 0;
        background-color: #0d0d0d;
    `}
`;

const Nav = styled.nav`
    width: 320px;
    display: flex;
    justify-content: space-between;

    ${ media.medium`
        display: ${(props) => (props.isToggleOpen ? "flex" : "none")};
        width: 100%;
        height: 180px;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 20px;
    `}
`

const Menu = styled.div`
    display: none;

    ${ media.medium`
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 15px;
        top: 15px;

        & > img {
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
    `}
`;