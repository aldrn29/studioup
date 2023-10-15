import styled from 'styled-components';

function Foouter() {
    return (
        <Warpper>
            <Inner>
                Footer
            </Inner>
        </Warpper>
    )
}

export default Foouter;

const Warpper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Inner = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
`;