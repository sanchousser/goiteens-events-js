import styled from 'styled-components';
import { PageBoard } from './PageBoard/PageBoard';
import events from '../upcoming-events'
import { PageTitle } from './PageTitle/PageTitle';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`


export const App = () => {
    return (
        <Container>
            <PageTitle></PageTitle>
            <PageBoard events={events}></PageBoard>
        </Container>
    );
};