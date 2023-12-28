import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          200: "#FAFDD6",
          400: "#E4E9BE",
          600: "#A2B38B",
        },
        apricot: {
          500: "#E6BA95",
          700: "#BF8350",
        },
      },
    },
  },
  plugins: [],
};
export default config
