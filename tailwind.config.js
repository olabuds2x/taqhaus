/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* ─── Studio palette (Nov 2026) ───
         Legacy Noir token names now resolve to the pine / ivory / coral
         system so the Tailwind-built pages (case studies, blog posts,
         portfolio) match the editorial pages. */
      colors: {
        black: '#0F231E',
        white: '#F6F1E7',

        noir: {
          void: '#0F231E',
          surface: '#133029',
          lowest: '#0B1B17',
          low: '#17362E',
          DEFAULT: '#1C3D35',
          high: '#22463D',
          highest: '#1A3932',
          bright: '#27504A',
        },
        dark: {
          DEFAULT: '#133029',
          900: '#0F231E',
        },
        neutral: {
          light: '#F6F1E7',
          lighter: '#FFFDF8',
        },
        maroon: {
          DEFAULT: '#27504A',
          deep: '#0F231E',
          light: '#3B6A61',
        },
        blush: {
          DEFAULT: '#FFB4A3',
          warm: '#FF9A82',
          muted: '#C9D3CE',
          cream: '#F6F1E7',
        },
        strike: {
          DEFAULT: '#FF6A4D',
          glow: 'rgba(255, 106, 77, 0.25)',
        },
        ink: {
          DEFAULT: '#F6F1E7',
          secondary: '#B9C4BE',
          muted: '#8FA59D',
        },
        outline: {
          DEFAULT: '#2F5A50',
          ghost: '#22463D',
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
        headline: ['"Inter Tight"', '"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        label: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        /* Legacy aliases */
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', '"Hanken Grotesk"', 'system-ui', 'sans-serif'],
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
