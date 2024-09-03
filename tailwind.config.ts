import type { Config } from "tailwindcss"

const shadow = "4px 4px 0 rgba(110, 13, 37, 0.25)"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "hackuta-pattern-transparent":
          "url('/images/transparent-pattern-bg.png')",
        "hackuta-pattern-red": "url('/images/red-pattern-bg.png')",
        "hackuta-pattern-red-2": "url('/images/red-pattern-bg-2.png')",
        "hackuta-pattern-red-3": "url('/images/red-pattern-bg-3.png')",
        "hackuta-pattern-blue": "url('/images/blue-pattern-bg.png')",
        "hackuta-pattern-yellow": "url('/images/yellow-pattern-bg.png')",
        "hackuta-pattern-black": "url('/images/black-pattern-bg.png')",

        "hackuta-ticket": "url('/images/ticket.svg')",
        "hackuta-ticket-red": "url('/images/ticket-red.svg')",
        "hackuta-ticket-blue": "url('/images/ticket-blue.svg')",
        "hackuta-ticket-yellow": "url('/images/ticket-yellow.svg')",

        "hackuta-sqrbg-ruby": "url('/images/backgrounds/rubyred.png')",
        "hackuta-sqrbg-fireice": "url('/images/backgrounds/fireice.png')",
        "hackuta-sqrbg-seir": "url('/images/backgrounds/seir.png')",
        "hackuta-sqrbg-swsh": "url('/images/backgrounds/swsh.png')",
        "hackuta-sqrbg-hackuta2022":
          "url('/images/backgrounds/hackuta2022.png')",
        "hackuta-sqrbg-unregistered":
          "url('/images/backgrounds/unregistered.png')",
        "hackuta-sqrbg-red": "url('/images/backgrounds/red.png')",

        "hackuta-noqrcode": "url('/images/noqrcode.svg')",
      },
      boxShadow: {
        hackuta: shadow,
      },
      colors: {
        "hackuta-black": "#130D08",
        "hackuta-beige": "#D2C2A9",
        "hackuta-blue": "#2869A9",
        "hackuta-darkblue": "#122F4C",
        "hackuta-red": "#AF2922",
        "hackuta-darkred": "#7A1D18",
        "hackuta-yellow": "#F8B92A",
        "hackuta-black-60": "rgba(19, 13, 8, 0.6)",
        "hackuta-error": "#D50032",
        "event-current": "#28653d",
        "event-future": "#007cab",
        "event-past": "#494947",
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
      dropShadow: {
        hackuta: shadow,
      },
      fontFamily: {
        heading: ["var(--font-rhd)", "sans-serif"],
        body: ["var(--font-atkinson)", "sans-serif"],
        mono: ["var(--font-rhm)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyFrames: {
        "jump-shaking": {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateY(-9px)" },
          "35%": { transform: "translateY(-9px) rotate(17deg)" },
          "55%": { transform: "translateY(-9px) rotate(-17deg)" },
          "65%": { transform: "translateY(-9px) rotate(17deg)" },
          "75%": { transform: "translateY(-9px) rotate(-17deg)" },
          "100%": { transform: "translateY(0) rotate(0)" },
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      width: {
        15: "3.75rem",
        46: "11.5rem",
      },
      zIndex: {
        100: "100",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
