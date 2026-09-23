import React, { useEffect, useRef, useState, useCallback } from 'react';
import styles from './CoyoteWatcher.module.css';

const MASCOT_MESSAGES = [
  'Bora tomar uma?',
  'O chopp tá trincando!',
  'Sim, teve 2 casamentos aqui!',
  'Partiu uma sinuca?',
  'Chapa tá tinindo!',
];

export default function CoyoteWatcher({ size = 110, showSpeechBubble = true, className = '' }) {
  const mascotRef = useRef(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  // Mouse tracking on window
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!mascotRef.current) return;
      const rect = mascotRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);
      const maxDist = 5; // Pupil travel limit in px
      const dist = Math.min(maxDist, Math.hypot(deltaX, deltaY) / 25);

      setPupilPos({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Periodic organic blink (especially great on mobile)
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 140);
    }, 4200);

    return () => clearInterval(blinkInterval);
  }, []);

  // Cycle speech on hover / click
  const handleInteraction = useCallback(() => {
    setIsHovered(true);
    setMessageIndex((prev) => (prev + 1) % MASCOT_MESSAGES.length);
  }, []);

  return (
    <div
      ref={mascotRef}
      className={`${styles.mascotContainer} ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={handleInteraction}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleInteraction}
      role="img"
      aria-label="Coyote Watcher: mascote interativo do bar"
    >
      {showSpeechBubble && isHovered && (
        <div className={styles.speechBubble} aria-live="polite">
          <span className={styles.speechText}>{MASCOT_MESSAGES[messageIndex]}</span>
        </div>
      )}

      <svg viewBox="0 0 120 120" className={styles.mascotSvg} aria-hidden="true">
        {/* Orelhas com degradê quente */}
        <polygon points="25,45 10,12 48,28" fill="#141824" stroke="#e89e24" strokeWidth="2.5" />
        <polygon points="25,40 16,18 42,30" fill="#e89e24" opacity="0.65" />
        <polygon points="95,45 110,12 72,28" fill="#141824" stroke="#e89e24" strokeWidth="2.5" />
        <polygon points="95,40 104,18 78,30" fill="#e89e24" opacity="0.65" />

        {/* Cabeça do Coyote */}
        <path
          d="M 22 45 Q 60 22 98 45 Q 108 72 90 98 Q 60 114 30 98 Q 12 72 22 45 Z"
          fill="#11141c"
          stroke="#e89e24"
          strokeWidth="2.5"
        />

        {/* Detalhes de pelagem nas bochechas */}
        <polygon points="18,65 5,72 20,78" fill="#141824" stroke="#e89e24" strokeWidth="1.5" />
        <polygon points="102,65 115,72 100,78" fill="#141824" stroke="#e89e24" strokeWidth="1.5" />

        {/* Focinho e Bochechas */}
        <path d="M 40 70 Q 60 85 80 70 Q 60 102 40 70 Z" fill="#1a1e2b" />
        {/* Nariz */}
        <polygon points="54,78 66,78 60,86" fill="#e89e24" />

        {/* Sorriso Amigável de Boteco */}
        <path
          d="M 48 90 Q 60 98 72 90"
          stroke="#fbf8f2"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* Olhos com suporte a piscar orgânico */}
        <g
          style={{
            transformOrigin: '60px 54px',
            transform: isBlinking ? 'scaleY(0.1)' : 'scaleY(1)',
            transition: 'transform 0.08s ease',
          }}
        >
          {/* Olho Esquerdo (Globo ocular) */}
          <ellipse cx="44" cy="54" rx="10" ry="12" fill="#fbf8f2" />
          {/* Pupila Esquerda com tracking do mouse */}
          <circle cx={44 + pupilPos.x} cy={54 + pupilPos.y} r="5" fill="#090a0f" />
          <circle cx={44 + pupilPos.x + 1.5} cy={54 + pupilPos.y - 1.5} r="1.8" fill="#fbf8f2" />

          {/* Olho Direito (Globo ocular) */}
          <ellipse cx="76" cy="54" rx="10" ry="12" fill="#fbf8f2" />
          {/* Pupila Direita com tracking do mouse */}
          <circle cx={76 + pupilPos.x} cy={54 + pupilPos.y} r="5" fill="#090a0f" />
          <circle cx={76 + pupilPos.x + 1.5} cy={54 + pupilPos.y - 1.5} r="1.8" fill="#fbf8f2" />
        </g>
      </svg>
    </div>
  );
}
