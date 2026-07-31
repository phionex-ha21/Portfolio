import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-neon rounded-full pointer-events-none z-[100] mix-blend-difference"
      animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      style={{ boxShadow: '0 0 10px 2px rgba(0, 255, 102, 0.4)' }}
    />
  );
}