import React from 'react';

export default (props) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16pt'
        height='16pt'
        viewBox='0 0 16 16'
    >
        <g id='surface1'>
            <path
                opacity={props.opacity || ''}
                d='M 8.667969 2 L 8.667969 6 L 14 6 L 14 2 M 8.667969 14 L 14 14 L 14 7.332031 L 8.667969 7.332031 M 2 14 L 7.332031 14 L 7.332031 10 L 2 10 M 2 8.667969 L 7.332031 8.667969 L 7.332031 2 L 2 2 Z M 2 8.667969 '
                fill={props.fill || "#9FA2B4"}
            />
        </g>
    </svg>
);
