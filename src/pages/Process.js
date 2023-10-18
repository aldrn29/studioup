import styled from 'styled-components';
import ProcessData from '../data/ProcessData';
import pic from '../assets/images/pic04.jpg';

function Process() {
    const ProcessList = ProcessData.map(data => (
        <div key={data.id}>
            <Title>{data.title}</Title>
            <Content>
                { data.content.map((d, index) => <p key={index}>{d}</p>) }
            </Content>
        </div>
    ));

    return (
        <Wrapper>
            <img src={pic} />
            <Inner>
                { ProcessList }
            </Inner>
        </Wrapper>
    )
}

export default Process;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > img {
        width: 470px; 
        height: 200px; 
        object-fit: cover;
    }
`;

const Inner = styled.div`
    width: 470px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Title = styled.div`
    width: auto;
    margin: 50px 0 0 0;
`;

const Content = styled.div`
    width: auto;
    margin: 10px 0 0 0;
`;