import React from 'react';

export default function CoyoteLogo({ size = 38, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Coyote Bar Logo"
    >
      <defs>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--brand-blue-light, #4a7fff)" />
          <stop offset="1" stopColor="var(--brand-blue-dark, #10359c)" />
        </linearGradient>
        <linearGradient id="amberGrad" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--accent-amber, #f59e0b)" />
          <stop offset="1" stopColor="var(--accent-amber-hover, #d97706)" />
        </linearGradient>
      </defs>

      {/* Hexagonal Shield Background */}
      <polygon
        points="50,4 92,24 92,72 50,96 8,72 8,24"
        fill="#131b2e"
        stroke="url(#shieldGrad)"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Inner Accent Crest Border */}
      <polygon
        points="50,11 85,28 85,68 50,89 15,68 15,28"
        fill="#0b0f19"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="1.5"
      />

      {/* Stylized Wolf Silhouette Geometry */}
      {/* Wolf Ears */}
      <polygon points="32,25 42,40 28,42" fill="url(#shieldGrad)" />
      <polygon points="68,25 72,42 58,40" fill="url(#shieldGrad)" />

      {/* Wolf Head Main Contours */}
      <polygon points="50,30 63,44 50,56 37,44" fill="#f8fafc" />

      {/* Wolf Snout */}
      <polygon points="50,45 61,56 50,75 39,56" fill="url(#shieldGrad)" />

      {/* Wolf Nose */}
      <polygon points="47,70 53,70 50,75" fill="url(#amberGrad)" />

      {/* Wolf Eyes - Amber glowing */}
      <polygon points="41,48 45,46 44,50" fill="url(#amberGrad)" />
      <polygon points="59,48 56,50 55,46" fill="url(#amberGrad)" />

      {/* Bottom Pub Star / Accent */}
      <circle cx="50" cy="83" r="2.5" fill="url(#amberGrad)" />
    </svg>
  );
}
