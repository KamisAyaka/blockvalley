import React, { useState, useEffect, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const onMouseMove = (e) => {
            // Direct, instant movement using transform for performance (No Lag)
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
            }

            // Check clickable elements for hover state
            const target = e.target;
            const isInteractive =
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('interactive-hover');

            setIsHovering(!!isInteractive);
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return (
        <>
            <style>{`
        /* DEFAULT: Hide Cursor logic completely to prevent touch interference */
        .custom-cursor-container {
          display: none;
        }

        /* ONLY enable on devices that support hover AND have a fine pointer (Mouse/Trackpad) */
        @media (hover: hover) and (pointer: fine) {
          /* Hide the system cursor */
          body { cursor: none; }
          a, button, [role="button"] { cursor: none; }
          
          /* Show the custom cursor container */
          .custom-cursor-container {
            display: flex;
          }
        }
      `}</style>
            {/* Kept the media query style block here because it's global body cursor manipulation specific to this component's existence */}

            {/* Main Cursor Container - Follows Mouse Instantly */}
            <div
                ref={cursorRef}
                className="custom-cursor-container fixed top-0 left-0 pointer-events-none z-[9999] items-center justify-center will-change-transform"
                style={{ transform: 'translate(-50%, -50%)' }} // Initial centering
            >
                {/* The Gradient Ring */}
                <div
                    className={`relative flex items-center justify-center rounded-full transition-all duration-200 ease-out
            ${isHovering ? 'w-16 h-16' : 'w-10 h-10'}
            ${isClicking ? 'scale-90' : 'scale-100'}
          `}
                >
                    {/* Animated Gradient Border - Using tailwind animate-spin-medium (custom) or inline style if not perfect */}
                    <div className="absolute inset-0 rounded-full p-[2px] animate-spin-medium"
                        style={{
                            background: 'conic-gradient(from 0deg, #EC4899, #3B82F6, #10B981, #EC4899)',
                            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            maskComposite: 'exclude',
                            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                            WebkitMaskComposite: 'xor',
                            borderRadius: '50%'
                        }}
                    />
                </div>

                {/* The Center Dot - Stays sharp and centered */}
                <div
                    className={`absolute w-2 h-2 bg-pink-500 rounded-full transition-all duration-200 
            ${isHovering ? 'bg-blue-500 scale-125' : ''}
          `}
                />
            </div>
        </>
    );
};

export default CustomCursor;
