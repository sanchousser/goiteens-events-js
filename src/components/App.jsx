import styled from 'styled-components';
import { PageBoard } from './PageBoard/PageBoard';
import events from '../upcoming-events'


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    display: flex;
    justify-content: center;
    color: black;
    text-align: center;
    width: 90vw;
    background-color: #F0FFFF;
    border: 2px solid #89CFF0;
    padding: 10px;
    margin-bottom: 50px;
`

export const App = () => {
    return (
        <Container>
            <Title>24th Core Worlds Coalititon Conference</Title>
            <PageBoard events={events}></PageBoard>
        </Container>
    );
};