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
          "inset 2.02px 3.45px 5.47px -0.68px rgba(0, 0, 0, 0.1),inset -3.04px -5.17px 5.47px -0.68px rgba(0, 0, 0, 0.2),6.07px 10.35px 4.11px -2.05px rgba(0, 0, 0, 0.3);",
        claymorpishm2:
          "inset 1.52px 2.59px 4.11px -0.51px rgba(0, 0, 0, 0.15),inset -2.28px -3.88px 4.11px -0.51px rgba(0, 0, 0, 0.3),4.56px 7.76px 3.08px -1.54px rgba(0, 0, 0, 0.4);",
        claymorpishm3:
          "inset 2.53px 4.31px 6.84px -0.86px rgba(0, 0, 0, 0.15),inset -3.80px -6.47px 6.84px -0.86px rgba(0, 0, 0, 0.3),7.59px 12.94px 5.13px -2.57px rgba(0, 0, 0, 0.4);",

        "3d": "0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)",
      },
      screens: {
        dekstop: "2000px",
        minNav: "1180px",
      },
    },
  },
  plugins: [],
};
