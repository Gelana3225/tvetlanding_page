/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
          "border": "var(--border)",
          "input": "var(--input)",
          "ring": "var(--ring)",
          "background": "var(--background)",
          "foreground": "var(--foreground)",
          "card": {
            "DEFAULT": "var(--card)",
            "foreground": "var(--card-foreground)"
          },
          "popover": {
            "DEFAULT": "var(--popover)",
            "foreground": "var(--popover-foreground)"
          },
          "muted": {
            "DEFAULT": "var(--muted)",
            "foreground": "var(--muted-foreground)"
          },
          "accent": {
            "DEFAULT": "var(--accent)",
            "foreground": "var(--accent-foreground)"
          },
          "destructive": {
            "DEFAULT": "var(--destructive)",
            "foreground": "var(--destructive-foreground)"
          },
          "secondary": "#555f6f",
          "error": "#ba1a1a",
          "primary-fixed-dim": "#95d3ba",
          "primary-container": "#064e3b",
          "on-secondary-container": "#596373",
          "surface-container-low": "#f3f4f5",
          "primary-fixed": "#b0f0d6",
          "on-tertiary-fixed-variant": "#653e00",
          "outline": "#707974",
          "surface-container-highest": "#e1e3e4",
          "surface-container-high": "#e7e8e9",
          "on-primary": "#ffffff",
          "on-secondary": "#ffffff",
          "surface-variant": "#e1e3e4",
          "surface-bright": "#f8f9fa",
          "on-primary-container": "#80bea6",
          "secondary-fixed-dim": "#bdc7d9",
          "tertiary-container": "#623c00",
          "on-tertiary": "#ffffff",
          "inverse-on-surface": "#f0f1f2",
          "surface": "#f8f9fa",
          "inverse-surface": "#2e3132",
          "on-secondary-fixed-variant": "#3d4756",
          "secondary-fixed": "#d9e3f6",
          "surface-container": "#edeeef",
          "on-error-container": "#93000a",
          "surface-tint": "#2b6954",
          "on-surface": "#191c1d",
          "on-tertiary-fixed": "#2a1700",
          "tertiary-fixed-dim": "#ffb95f",
          "inverse-primary": "#95d3ba",
          "on-surface-variant": "#404944",
          "outline-variant": "#bfc9c3",
          "on-error": "#ffffff",
          "secondary-container": "#d6e0f3",
          "on-primary-fixed": "#002117",
          "tertiary-fixed": "#ffddb8",
          "surface-container-lowest": "#ffffff",
          "on-primary-fixed-variant": "#0b513d",
          "primary": "#003527",
          "error-container": "#ffdad6",
          "surface-dim": "#d9dadb",
          "on-secondary-fixed": "#121c2a",
          "on-tertiary-container": "#f69f0d",
          "tertiary": "#442800",
          "on-background": "#191c1d"
      },
      "borderRadius": {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "full": "9999px"
      },
      "spacing": {
          "base": "8px",
          "margin-mobile": "16px",
          "container-max": "1280px",
          "section-gap": "80px",
          "margin-desktop": "48px",
          "gutter": "24px"
      },
      "fontFamily": {
          "label-md": ["Manrope", "sans-serif"],
          "display-lg": ["Manrope", "sans-serif"],
          "body-lg": ["Manrope", "sans-serif"],
          "headline-md": ["Manrope", "sans-serif"],
          "display-lg-mobile": ["Manrope", "sans-serif"],
          "body-md": ["Manrope", "sans-serif"],
          "headline-lg": ["Manrope", "sans-serif"],
          "stats-number": ["Manrope", "sans-serif"],
          "sans": ["Manrope", "sans-serif"]
      },
      fontSize: {
          "label-md": ["14px", { "lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600" }],
          "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
          "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
          "headline-md": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
          "display-lg-mobile": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
          "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
          "headline-lg": ["32px", { "lineHeight": "40px", "fontWeight": "700" }],
          "stats-number": ["40px", { "lineHeight": "48px", "fontWeight": "800" }]
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        'breathe': 'breathe 6s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
