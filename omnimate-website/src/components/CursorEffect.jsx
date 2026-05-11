import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CursorEffect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 420, damping: 34 });
  const springY = useSpring(mouseY, { stiffness: 420, damping: 34 });

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    const handleMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);

      const target = event.target;
      setIsPointer(
        target instanceof Element &&
          Boolean(target.closest('a, button, input, textarea, select, [role="button"]'))
      );
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMove);
    document.documentElement.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="cursor-ring"
        style={{ x: springX, y: springY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.65 : 1,
        }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
      />
      <motion.div
        className="cursor-dot"
        style={{ x: mouseX, y: mouseY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 0.5 : 1,
        }}
        transition={{ duration: 0.12, ease: 'easeOut' }}
      />
    </>
  );
};

export default CursorEffect;
