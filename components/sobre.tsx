'use client'
import React, { useState, useEffect } from 'react';

interface EnvelopeWrapperProps {
  children: React.ReactNode;
}

const EnvelopeWrapper = ({ children }: EnvelopeWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => {
        setIsComplete(true);
      }, 2000);
    }, 500);
  }, []);

  if (isComplete) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Contenido original - siempre visible */}
      <div className="w-full h-full">
        {children}
      </div>

      {/* Capa de animación del sobre */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none" style={{ zIndex: 9999 }}>
        <div className="relative w-full h-full">
          {/* Solapa superior del sobre */}
          <div 
            className={`absolute top-0 left-0 w-full h-1/2 bg-blue-500 transition-all duration-1000 ease-in-out
              origin-bottom transform ${isOpen ? '-translate-y-full' : 'translate-y-0'}`}
            style={{
              clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
              zIndex: 50
            }}
          />

          {/* Solapas laterales */}
          <div 
            className={`absolute top-0 left-0 w-1/2 h-full bg-blue-400 transition-transform duration-1000 ease-in-out
              origin-right transform ${isOpen ? '-translate-x-full' : 'translate-x-0'}`}
            style={{ zIndex: 40 }}
          />
          <div 
            className={`absolute top-0 right-0 w-1/2 h-full bg-blue-400 transition-transform duration-1000 ease-in-out
              origin-left transform ${isOpen ? 'translate-x-full' : 'translate-x-0'}`}
            style={{ zIndex: 40 }}
          />

          {/* Solapa inferior */}
          <div 
            className={`absolute bottom-0 left-0 w-full h-1/2 bg-blue-600 transition-transform duration-1000 ease-in-out
              origin-top transform ${isOpen ? 'translate-y-full' : 'translate-y-0'}`}
            style={{ zIndex: 40 }}
          />
        </div>
      </div>
    </>
  );
};

export default EnvelopeWrapper;