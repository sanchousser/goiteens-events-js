import styled from 'styled-components';

export const EventItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 4px solid #FBCEB1;
  margin: 0;
  width: 300px;
  height: 200px;
  background-color: #FFF5EE;
`;

export const EventTitle = styled.h3`
  margin: 15px;
  display: block;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 25px;
  gap: 5px;
  p {
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: 8px;
  }
`;
