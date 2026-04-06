import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const move = (e) => {
            cursorRef.current.style.left = e.clientX + 'px';
            cursorRef.current.style.top = e.clientY + 'px';
        };
        window.addEventListener('mousemove', move);
        return () => window.removeEventListener('mousemove', move);
    }, []);

    useEffect(() => {
        const handleHover = (e) => {
            const target = e.target;
            const isInteractive = target.closest('a, button, input, select, textarea, [data-cursor]');
            if (!isInteractive) return;

            const rect = target.getBoundingClientRect();
            const x = rect.left + rect.width / 2;
            const y = rect.top + rect.height / 2;

            const interval = setInterval(() => {
                const id = Date.now() + Math.random();
                const angle = Math.random() * 2 * Math.PI;
                const distance = 20 + Math.random() * 30;
                setParticles(prev => [...prev, {
                    id,
                    x: cursorRef.current ? parseInt(cursorRef.current.style.left) : x,
                    y: cursorRef.current ? parseInt(cursorRef.current.style.top) : y,
                    dx: Math.cos(angle) * distance,
                    dy: Math.sin(angle) * distance,
                }]);
                setTimeout(() => {
                    setParticles(prev => prev.filter(p => p.id !== id));
                }, 600);
            }, 80);

            target.addEventListener('mouseleave', () => clearInterval(interval), { once: true });
        };

        window.addEventListener('mouseover', handleHover);
        return () => window.removeEventListener('mouseover', handleHover);
    }, []);

    return (
        <>
            <div ref={cursorRef} className="custom-cursor">
                <div className="cursor-dot"></div>
            </div>
            {particles.map(p => (
                <div
                    key={p.id}
                    className="cursor-particle"
                    style={{
                        left: p.x + 'px',
                        top: p.y + 'px',
                        '--dx': p.dx + 'px',
                        '--dy': p.dy + 'px',
                    }}
                />
            ))}
        </>
    );
};

export default CustomCursor;
