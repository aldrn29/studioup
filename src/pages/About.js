import styled from 'styled-components';
import pic from '../assets/images/pic06.jpg';
import media from '../styles/media'; 

function About() {
    return (
        <Wrapper>
            <Inner>
                <h1>스튜디오업 Studio_up</h1>
                <p>스튜디오업, Sup은 Film을 기반으로 광고, 영화, 다큐멘터리를 제작하고 있습니다.</p>
                <br/>
                <p>Studio Up, Sup is producing advertisements, movies, and documentaries based on Film.</p>
                <br/>
                <img src={pic}/>
            </Inner>
        </Wrapper>
    )
}

export default About;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Inner = styled.div`
    width: 470px;
    height: 75%;
    display: flex;
    flex-direction: column;
    
    & > h1 {
        margin-bottom: 50px;
    }

    ${ media.medium`
        max-width: 80%;
    `}
`;