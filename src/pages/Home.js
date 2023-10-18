import styled from 'styled-components';
import intro from '../assets/videos/intro.mp4';

function Home() {
    return (
        <Wrapper>
            <IntroVideo>
            <Video muted autoPlay loop>
                <source src={intro} type="video/mp4"></source>
            </Video>
            </IntroVideo>
            <Gradient />
        </Wrapper>
    )
}

export default Home;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const IntroVideo = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.7;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Gradient = styled.video`
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,1));
`;