import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800); // 1.8 seconds – adjust as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-normal text-gray-900">
                OMNIMATE<span className="text-lime-500">.</span>
              </h1>
            </motion.div>

            {/* Animated line – dark gray with lime accent */}
            <motion.div
              animate={{ 
                width: ["0%", "100%", "0%"],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.8,
                ease: "easeInOut"
              }}
              className="mx-auto h-px bg-gray-400"
              style={{ width: "8rem" }}
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-500 font-mono text-sm mt-4 tracking-normal"
            >
              Loading
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;