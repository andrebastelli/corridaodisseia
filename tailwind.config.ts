import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pandora-cream': '#FFF1DE',
        'pandora-beige': '#FBE7CC',
        'pandora-orange': '#F04A23',
        'pandora-orange-deep': '#C73A18',
        'pandora-wine': '#8A1628',
        'pandora-gold': '#F6B756',
        'pandora-text': '#1F1A17',
        'pandora-muted': '#7A6A5E',
        'pandora-border': '#E9DAC4',
        'pandora-dark': '#1A0A0E',
      },
      fontFamily: {
        display: ['"Montserrat Alternates"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
