import styled from 'styled-components';
import YouTube from 'react-youtube';
import WorkData from '../data/WorkData';

function Works() {
    const WorkList = WorkData.map(data => (
        <Video>
            <YouTube
                key={data.id}
                videoId={data.videoId}
                opts={{
                    width: "440",
                    height: "230",
                    playerVars: {
                        autoplay: 0,
                        rel: 0,
                        modestbranding: 1,
                    },
                }}
                //onReady={(e) => { e.target.mute(); }}
                onEnd={(e) => { e.target.stopVideo(0); }}
            />
        </Video>
    ));

    return (
        <Wrapper>
            <Inner>
                { WorkList }
            </Inner>
        </Wrapper>
    )
}

export default Works;

const Wrapper = styled.div`
    width: 100%;
    height: 150vh;
    padding-top: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Inner = styled.div`
    width: 930px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
`;

const Video = styled.div`
    margin: 10px;
    border: 1px solid white;
`;