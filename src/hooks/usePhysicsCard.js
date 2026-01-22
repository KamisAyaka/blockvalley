import { useRef, useEffect } from 'react';

export const usePhysicsCard = (cardRef, ballRef) => {
    const requestRef = useRef(null);
    const isHovered = useRef(false);
    const mousePos = useRef({ x: -1000, y: -1000 });
    const prevMousePos = useRef({ x: -1000, y: -1000 });

    // Physics State
    const physics = useRef({
        pos: { x: 0, y: 0 },
        vel: { x: 0, y: 0 },
        angle: 0,
        radius: 35,        // Half of 70px ball size
        friction: 0.99,    // Light friction for fluid drift
        restitution: 0.9   // Bounciness
    });

    const handleMouseEnter = () => {
        isHovered.current = true;
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            physics.current.pos = { x: rect.width / 2, y: rect.height / 2 };

            // Spawn Logic: Slow Float
            const speed = 1.5;
            const angle = Math.random() * Math.PI * 2;
            physics.current.vel = {
                x: Math.cos(angle) * speed,
                y: Math.sin(angle) * speed
            };
        }
        if (!requestRef.current) {
            requestRef.current = requestAnimationFrame(animate);
        }
    };

    const handleMouseLeave = () => {
        isHovered.current = false;
        mousePos.current = { x: -1000, y: -1000 };
    };

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            prevMousePos.current = { ...mousePos.current };
            mousePos.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }
    };

    const animate = () => {
        if (!cardRef.current || !ballRef.current) return;

        if (!isHovered.current) {
            requestRef.current = null;
            return;
        }

        const rect = cardRef.current.getBoundingClientRect();
        const p = physics.current;

        // 1. Update Position
        p.pos.x += p.vel.x;
        p.pos.y += p.vel.y;

        // 2. Rotation (based on speed)
        const speed = Math.sqrt(p.vel.x * p.vel.x + p.vel.y * p.vel.y);
        p.angle += speed * 1.5;

        // 3. Wall Collision
        if (p.pos.x - p.radius < 0) {
            p.pos.x = p.radius;
            p.vel.x *= -1 * p.restitution;
        } else if (p.pos.x + p.radius > rect.width) {
            p.pos.x = rect.width - p.radius;
            p.vel.x *= -1 * p.restitution;
        }

        if (p.pos.y - p.radius < 0) {
            p.pos.y = p.radius;
            p.vel.y *= -1 * p.restitution;
        } else if (p.pos.y + p.radius > rect.height) {
            p.pos.y = rect.height - p.radius;
            p.vel.y *= -1 * p.restitution;
        }

        // 4. "RACKET HIT" COLLISION logic
        const dx = p.pos.x - mousePos.current.x;
        const dy = p.pos.y - mousePos.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Hit radius = ball radius + buffer
        const hitRadius = p.radius + 15;

        if (dist < hitRadius) {
            let nx = dx / dist;
            let ny = dy / dist;
            if (dist === 0) { nx = 1; ny = 0; }

            // Strong Impulse Force
            const hitStrength = 18;

            p.vel.x += nx * hitStrength;
            p.vel.y += ny * hitStrength;

            // Prevent sticking
            p.pos.x += nx * 2;
            p.pos.y += ny * 2;
        }

        // 5. Friction & Speed Cap
        p.vel.x *= p.friction;
        p.vel.y *= p.friction;

        // Maintain Minimum Drift (Never fully stop)
        const minSpeed = 1.0;
        const currentSpeed = Math.sqrt(p.vel.x * p.vel.x + p.vel.y * p.vel.y);
        if (currentSpeed < minSpeed && currentSpeed > 0.01) {
            const scale = minSpeed / currentSpeed;
            p.vel.x *= scale;
            p.vel.y *= scale;
        }

        const maxSpeed = 25;
        if (currentSpeed > maxSpeed) {
            const scale = maxSpeed / currentSpeed;
            p.vel.x *= scale;
            p.vel.y *= scale;
        }

        // 6. Render
        const renderX = p.pos.x - p.radius;
        const renderY = p.pos.y - p.radius;
        ballRef.current.style.transform = `translate3d(${renderX}px, ${renderY}px, 0) rotate(${p.angle}deg)`;

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return {
        handleMouseEnter,
        handleMouseLeave,
        handleMouseMove
    };
};
