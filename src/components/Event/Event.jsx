import { EventItem, EventTitle, Wrapper } from './Event.styled';
import { formatEventDuration, formatEventStart } from './../../utils'
import PropTypes from 'prop-types';


import { FaLocationDot } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaCalendarAlt, FaClock } from "react-icons/fa";



export const Event = ({ name, start, end, location, speaker }) => {
    const formattedStart = formatEventStart(start)
    const duration = formatEventDuration(start, end);
    return (
        <EventItem>
            <EventTitle>{name}</EventTitle>
            <Wrapper>
                <p><FaLocationDot /> {location}</p>
                <p><IoPersonSharp /> {speaker}</p>
                <p><FaCalendarAlt /> {formattedStart}</p>
                <p><FaClock /> {duration}</p>
            </Wrapper>
        </EventItem>
    );
};

Event.propTypes = {
    name: PropTypes.string,
    start: PropTypes.string,
    end: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.string,
}


