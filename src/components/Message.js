import React from 'react';
import moment from 'moment';

export const Message = (props) => {
    const info = props.p
    const date = moment(info.date).fromNow();

    return (
        <li className="list-group-item">
            <div>
                <small>{ date }</small>
            </div>
            <div>
                {info.body}
            </div>
            <div>
                <cite>&mdash; {info.author}</cite>
            </div>
        </li>
    )
}
