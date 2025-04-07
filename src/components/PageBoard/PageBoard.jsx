import { Event } from 'components/Event/Event';
import { EventsList } from './PageBoard.styled';

export const PageBoard = ({ events }) => {
  return (
    <EventsList>
      {events.map(({name, time, location, speaker}) => {
        return (
          <Event
            name={name}
            start={time.start}
            end={time.end}
            location={location}
            speaker={speaker}
          />
        );
      })}
    </EventsList>
  );
};
