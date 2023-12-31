/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        coba: "350px",
      },
      height: {
        190: "200px",
      },
      boxShadow: {
        claymorpishm1:
          "inset 4.27px 4.22px 8.49px -1.06px rgba(0, 0, 0, 0.15), inset -6.40px -6.33px 8.49px -1.06px rgba(0, 0, 0, 0.2), 12.80px 12.66px 6.36px -3.18px rgba(0, 0, 0, 0.3)",
        claymorpishm2:
          "inset 2.13px 2.11px 4.24px -0.53px rgba(0, 0, 0, 0.15), inset -3.20px -3.16px 4.24px -0.53px rgba(0, 0, 0, 0.2), 6.40px 6.33px 3.18px -1.59px rgba(0, 0, 0, 0.3)",
        claymorpishm3:
          "inset 6.40px 6.33px 12.73px -1.59px rgba(0, 0, 0, 0.15), inset -9.60px -9.49px 12.73px -1.59px rgba(0, 0, 0, 0.25), 19.19px 18.99px 9.55px -4.77px rgba(0, 0, 0, 0.35)",

        "3d": "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
