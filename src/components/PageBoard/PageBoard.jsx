import { Event } from 'components/Event/Event';
import { EventsList } from './PageBoard.styled';

export const PageBoard = ({ events }) => {
  return (
    <EventsList>
      {events.map(({name, start, end, location, speaker}) => {
        return (
          <Event
            name={name}
            start={start}
            end={end}
            location={location}
            speaker={speaker}
          />
        );
      })}
    </EventsList>
  );
};
