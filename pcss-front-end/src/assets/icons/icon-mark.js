import React from 'react';

export default (props) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='16pt' height='16pt' viewBox='0 0 16 16'>
        <g id='surface1'>
            <path
                opacity={props.opacity || ''}
                d='M 5.726562 11.054688 L 8.78125 8 L 5.726562 4.941406 L 6.667969 4 L 10.667969 8 L 6.667969 12 Z M 5.726562 11.054688 '
                fill={props.fill || "#9FA2B4"}
            />
        </g>
    </svg>
);
