import type { Config } from "tailwindcss";

const shadow = "4px 4px 0 rgba(18, 47, 76, 0.25)";
const svgToDataUri = require("mini-svg-data-uri");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
      },
      dropShadow: {
        hackuta: shadow,
      },
      fontFamily: {
        heading: ["var(--font-rhd)", "sans-serif"],
        body: ["var(--font-atkinson)", "sans-serif"],
        mono: ["var(--font-rhm)", "monospace"],
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
      width: {
        15: "3.75rem",
        46: "11.5rem",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-dot-thick": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
