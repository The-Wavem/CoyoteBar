import React, { useState } from 'react';
import { motion as Motion } from 'motion/react';

export default function CoyoteLogo({
  size = 50,
  animated = false,
  className = '',
  style = {},
  ...props
}) {
  const [isHovered, setIsHovered] = useState(false);

  // If animation is enabled, wrap in motion container with pub-inspired subtle effects:
  // 1. Toast / alert tilt: rotate [0, -3.5, 2, -0.8, 0]
  // 2. Neon filament warm glow aura
  // 3. Light sheen sweep across the crest
  if (animated) {
    return (
      <Motion.div
        className={className}
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          width: size,
          height: size,
          ...style,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          rotate: isHovered ? [0, -4, 2.5, -1, 0] : 0,
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
        {...props}
      >
        {/* Glow Aura - activates on hover */}
        <Motion.div
          style={{
            position: 'absolute',
            inset: -4,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, rgba(30, 91, 248, 0.2) 60%, transparent 75%)',
            filter: 'blur(10px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1.1 : 0.9,
          }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        />

        {/* Logo Image */}
        <Motion.img
          src="/assets/coyote_logo.png"
          alt="Coyote Bar Logo"
          width={size}
          height={size}
          style={{
            position: 'relative',
            zIndex: 1,
            width: size,
            height: size,
            objectFit: 'contain',
            display: 'block',
          }}
          animate={{
            filter: isHovered
              ? 'drop-shadow(0 0 12px rgba(245, 158, 11, 0.6)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.7))'
              : 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))',
          }}
          transition={{ duration: 0.35 }}
          loading="eager"
        />

        {/* Diagonal Light Sheen (Feixe de Luz de Pub passando pelo vidro) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            overflow: 'hidden',
            pointerEvents: 'none',
            borderRadius: '12%',
          }}
        >
          <Motion.div
            style={{
              position: 'absolute',
              top: '-50%',
              left: '-100%',
              width: '60%',
              height: '200%',
              background:
                'linear-gradient(115deg, transparent 10%, rgba(255, 255, 255, 0.35) 50%, rgba(245, 158, 11, 0.45) 60%, transparent 80%)',
              transform: 'skewX(-25deg)',
            }}
            animate={
              isHovered
                ? { left: '200%' }
                : { left: '-100%' }
            }
            transition={{
              duration: 0.65,
              ease: 'easeInOut',
            }}
          />
        </div>
      </Motion.div>
    );
  }

  // Non-animated fallback
  return (
    <img
      src="/assets/coyote_logo.png"
      alt="Coyote Bar Logo"
      width={size}
      height={size}
      className={className}
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        display: 'inline-block',
        verticalAlign: 'middle',
        filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))',
        ...style,
      }}
      loading="eager"
      {...props}
    />
  );
}
