import { Event } from 'components/Event/Event';
import { EventsList } from './PageBoard.styled';
import PropTypes from 'prop-types';

export const PageBoard = ({ events }) => {
  return (
    <EventsList>
      {events.map(({id, name, time, location, speaker}) => {
        return (
          <Event 
            key={id}
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


PageBoard.propTypes = {
  events: PropTypes.array
}
