import React, { useRef, useState, useCallback } from 'react';
import { cn } from '../../lib/utils';

export interface Tilt3DCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxTilt?: number; // Maximum tilt angle in degrees (default 8)
  perspective?: number; // Perspective distance in px (default 1000)
  scaleOnHover?: number; // Scale on hover (default 1.02)
  glareEffect?: boolean; // Show dynamic chrome specular glare
  className?: string;
}

export const Tilt3DCard: React.FC<Tilt3DCardProps> = ({
  children,
  maxTilt = 7,
  perspective = 1000,
  scaleOnHover = 1.015,
  glareEffect = true,
  className,
  style,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      setTiltStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, 1)`,
        transition: 'transform 0.08s ease-out',
      });

      if (glareEffect) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        setGlareStyle({
          opacity: 0.18,
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.8) 0%, rgba(122, 167, 255, 0.2) 40%, transparent 80%)`,
          transition: 'opacity 0.15s ease',
        });
      }
    },
    [maxTilt, perspective, scaleOnHover, glareEffect]
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTiltStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.4s ease',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...tiltStyle,
        ...style,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'relative rounded-2xl transition-shadow duration-300',
        isHovered
          ? 'shadow-[0_12px_32px_-4px_rgba(16,17,20,0.18),0_4px_12px_rgba(61,82,160,0.12),0_2px_0_0_#ADBBDA] dark:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.7),0_4px_16px_rgba(112,145,230,0.25),0_2px_0_0_#383D48]'
          : 'shadow-[0_2px_0_0_#ADBBDA,0_6px_18px_-2px_rgba(61,82,160,0.06)] dark:shadow-[0_2px_0_0_#2A2E37,0_6px_18px_-2px_rgba(0,0,0,0.5)]',
        className
      )}
      {...props}
    >
      {/* Specular Chrome Glare Overlay */}
      {glareEffect && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 rounded-2xl overflow-hidden"
          style={glareStyle}
        />
      )}
      {children}
    </div>
  );
};
