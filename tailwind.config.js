/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        slategray: {
          "100": "#6b7687",
          "200": "#656f80",
          "300": "#596a89",
          "400": "#62677a",
          "500": "rgba(125, 133, 143, 0.5)",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#dee1e7",
          "300": "#d9d9d9",
        },
        gray: {
          "100": "#fafbfd",
          "200": "#111d31",
          "300": "#0b0c2a",
          "400": "#010101",
        },
        black: "#000",
        whitesmoke: {
          "100": "#f9f9fb",
          "200": "#f8f9fb",
          "300": "#ecedf1",
        },
        mediumslateblue: {
          "100": "#666af6",
          "200": "#484ce0",
        },
        lightslategray: {
          "100": "#8e9eb7",
          "200": "#8591a8",
        },
        lavender: {
          "100": "#e2e2ed",
          "200": "#dae4ee",
        },
        ghostwhite: "rgba(236, 237, 247, 0.4)",
        silver: {
          "100": "rgba(176, 183, 195, 0.5)",
          "200": "rgba(196, 196, 196, 0.2)",
        },
        lightsteelblue: {
          "100": "#b7c5f4",
          "200": "rgba(159, 160, 198, 0.1)",
        },
        darkgray: "#a2a8b2",
        plum: "#bbbdff",
        dimgray: "#545e6d",
        darkslategray: {
          "100": "#454f63",
          "200": "#3d405e",
        },
        cornflowerblue: "#9497f9",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "open-sans": "'Open Sans'",
      },
      borderRadius: {
        "8xs-6": "4.6px",
        "6xs-9": "6.9px",
        "smi-5": "12.5px",
        "xs-2": "11.2px",
        "3xs": "10px",
        "10xs": "3px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      "3xs": "10px",
      smi: "13px",
      lg: "18px",
      "2xs-4": "10.4px",
      "4xs-6": "8.6px",
      "31xl": "50px",
      "11xl": "30px",
      "21xl": "40px",
      "base-7": "15.7px",
      "sm-1": "13.1px",
      base: "16px",
      xl: "20px",
      "5xl": "24px",
      "13xl": "32px",
      mini: "15px",
      "5xs": "8px",
      "3xs-6": "9.6px",
      "3xl": "22px",
      "9xl": "28px",
      "46xl": "65px",
      "20xl": "39px",
      "33xl": "52px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}

