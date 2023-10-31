import styled from 'styled-components';
import ProcessData from '../data/ProcessData';
import pic from '../assets/images/pic04.jpg';
import media from '../styles/media'; 

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
    height: auto;
    padding: 20vh 0 10vh 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > img {
        width: 470px; 
        height: 200px; 
        object-fit: cover;

        ${ media.medium`
            max-width: 80%;
        `}
    }
`;

const Inner = styled.div`
    width: 470px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;

    ${ media.medium`
        max-width: 80%;
        display: flex;
    `}
`;

const Title = styled.div`
    width: auto;
    margin: 20px 0 0 0;
`;

const Content = styled.div`
    width: auto;
    margin: 5px 0 0 0;
`;