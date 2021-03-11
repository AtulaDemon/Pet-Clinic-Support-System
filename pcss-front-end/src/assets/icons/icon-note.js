import React from 'react';

export default (props) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='16pt' height='16pt' viewBox='0 0 16 16'>
        <g id='surface1'>
            <path
                opacity={props.opacity || ''}
                d='M 10 2 L 3.332031 2 C 2.597656 2 2 2.597656 2 3.332031 L 2 12.667969 C 2 13.402344 2.597656 14 3.332031 14 L 12.667969 14 C 13.402344 14 14 13.402344 14 12.667969 L 14 6 L 10 2 M 12.667969 12.667969 L 3.332031 12.667969 L 3.332031 3.332031 L 9.332031 3.332031 L 9.332031 6.667969 L 12.667969 6.667969 M 11.332031 9.332031 L 4.667969 9.332031 L 4.667969 8 L 11.332031 8 M 9.332031 11.332031 L 4.667969 11.332031 L 4.667969 10 L 9.332031 10 '
                fill={props.fill || "#9FA2B4"}
            />
        </g>
    </svg>
);