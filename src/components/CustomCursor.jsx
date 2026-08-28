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
    <>
      {/* Outer circle */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-brand-accent rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 20,
          mass: 0.2
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-accent rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 40,
          mass: 0.1
        }}
      />
    </>
  );
}
