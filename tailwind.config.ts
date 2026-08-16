import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Scrapbook Palette ──────────────────────────────────────────────
        blush: {
          50:  '#FFF5F0',
          100: '#FFE4D8',
          200: '#F9C5B5',
          300: '#F0A090',
          400: '#E07868',
          500: '#C95E52',
        },
        ivory: {
          50:  '#FEFCF5',
          100: '#FAF6E8',
          200: '#F4EED8',
          300: '#EBE3C8',
        },
        dusty: {
          rose:  '#C9848A',
          pink:  '#E8A8A0',
          light: '#F5D5D0',
        },
        mustard: {
          50:  '#FEFCE8',
          100: '#FEF9C3',
          300: '#F5D878',
          500: '#D4A520',
          700: '#A07010',
        },
        warm: {
          50:  '#FAF6F0',
          100: '#F2EBE0',
          200: '#E4D8C8',
          700: '#6B5248',
          800: '#4A3028',
          900: '#2D1E18',
        },
        // Keep backwards-compatible rosegold for existing code
        rosegold: {
          light: '#F9C5B5',
          DEFAULT: '#D4956A',
          gold:  '#C8922A',
          dark:  '#9B6A30',
        },
      },
      fontFamily: {
        serif:  ['var(--font-handwritten)', 'Caveat', 'Kalam', 'cursive'],
        sans:   ['var(--font-sans)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        script: ['var(--font-handwritten)', 'Caveat', 'cursive'],
        hand:   ['var(--font-handwritten)', 'Caveat', 'Kalam', 'cursive'],
      },
      boxShadow: {
        'polaroid':     '0 4px 12px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)',
        'polaroid-lg':  '0 12px 30px rgba(0,0,0,0.18), 0 4px 8px rgba(0,0,0,0.1)',
        'soft-warm':    '0 10px 30px -10px rgba(180,120,80,0.18)',
        'card-warm':    '0 8px 24px -4px rgba(180,120,80,0.12)',
        'rose-glow':    '0 0 20px rgba(201,132,138,0.35)',
        'soft-pink':    '0 8px 20px -8px rgba(201,132,138,0.2)',
      },
      rotate: {
        '-8': '-8deg',
        '-6': '-6deg',
        '-4': '-4deg',
        '-3': '-3deg',
        '-2': '-2deg',
        '2':  '2deg',
        '3':  '3deg',
        '4':  '4deg',
        '6':  '6deg',
        '8':  '8deg',
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
export default config;
