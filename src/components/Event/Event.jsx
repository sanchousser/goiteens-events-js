import { EventItem } from './Event.styled';
// import { format, formatDistanceStrict } from 'date-fns';

// export const formatEventDuration = (start, end) => {
//     return formatDistanceStrict(Date.parse(start), Date.parse(end));
// };

// export const formatEventStart = (start) => {
//     return format(Date.parse(start), 'dd MMMM yyyy, HH:mm');
// };

export const Event = ({ name, start, end, location, speaker }) => {
    // const formattedStart = formatEventStart(start);
    // const formattedEnd = formatEventStart(end);
    // const duration = formatEventDuration(start, end);

    return (
        <EventItem>
            <h3>{name}</h3>
            <p><b>Start:</b> {start}</p>
            <p><b>End:</b> {end}</p>
            {/* <p><b>Duration:</b> {duration}</p> */}
            <p><b>Location:</b> {location}</p>
            <p><b>Speaker:</b> {speaker}</p>
        </EventItem>
    );
};
