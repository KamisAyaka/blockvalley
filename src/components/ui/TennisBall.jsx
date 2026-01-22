import React from 'react';

// Custom "Digital" Tennis Ball SVG
const TennisBall = ({
    fillColor = "#ffffff",
    seamColor = "#000000",
    size = 60,
    className = "",
    style = {}
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className={`drop-shadow-2xl ${className}`}
        style={style}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <linearGradient id="ballShine" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.9" />
                <stop offset="1" stopColor="white" stopOpacity="0.1" />
            </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="48" fill={fillColor} />
        <circle cx="50" cy="50" r="48" fill="url(#ballShine)" opacity="0.3" />
        <path d="M2,50 C20,50 35,35 35,2" stroke={seamColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M65,2 C65,35 80,50 98,50" stroke={seamColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M98,50 C80,50 65,65 65,98" stroke={seamColor} strokeWidth="6" strokeLinecap="round" />
        <path d="M35,98 C35,65 20,50 2,50" stroke={seamColor} strokeWidth="6" strokeLinecap="round" />
    </svg>
);

export default TennisBall;
