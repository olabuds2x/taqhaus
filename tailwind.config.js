/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* ─── Modern Noir / Stealth Luxury Palette ─── */
      colors: {
        /* Surface hierarchy — obsidian depth system */
        noir: {
          void: '#050505',        // page background
          surface: '#0a0a0a',     // primary surface
          lowest: '#000000',      // deepest wells
          low: '#121212',         // card bodies
          DEFAULT: '#1a1a1a',     // mid-level containers
          high: '#2c1c13',        // elevated (warm noir)
          highest: '#171717',     // highest elevation
          bright: '#262626',      // maximum brightness
        },

        /* Maroon signature — the "Noir" anchor */
        maroon: {
          DEFAULT: '#800f35',
          deep: '#2c000e',
          light: '#a93152',
        },

        /* Soft editorial accents */
        blush: {
          DEFAULT: '#ffb2be',     // primary pink
          warm: '#ffb5a0',        // secondary warm
          muted: '#eabdac',       // tertiary muted
          cream: '#fbdcce',       // on-surface text
        },

        /* The singular CTA accent — used ONLY for conversions */
        strike: {
          DEFAULT: '#FF5722',
          glow: 'rgba(255, 87, 34, 0.25)',
        },

        /* Text hierarchy */
        ink: {
          DEFAULT: '#fbdcce',     // primary text on dark
          secondary: '#a3a3a3',   // body / secondary text
          muted: '#737373',       // tertiary / disabled
        },

        /* Structural */
        outline: {
          DEFAULT: '#404040',
          ghost: '#262626',       // ghost borders (15% opacity feel)
        },

        /* Legacy compatibility aliases */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      /* ─── Typography — Authority meets Utility ─── */
      fontFamily: {
        headline: ['"Noto Serif"', 'Georgia', '"Times New Roman"', 'serif'],
        body: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        label: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        /* Legacy aliases */
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Noto Serif"', 'Georgia', 'serif'],
      },

      /* ─── Spacing — Luxury breathing room ─── */
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },

      /* ─── Animations ─── */
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scroll-logos': 'scrollLogos 45s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scrollLogos: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
