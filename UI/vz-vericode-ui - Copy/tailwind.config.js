/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "ls-bg": "var(--ls-bg)",
          "ls-gray": "var(--ls-gray)",
          "ls-primary": "var(--ls-primary)",
          "ls-white": "var(--ls-white)",
          lsblack: "var(--lsblack)",
        },
        fontFamily: {
          "additional-text-style-block-text":
            "var(--additional-text-style-block-text-font-family)",
          "additional-text-style-overline-label":
            "var(--additional-text-style-overline-label-font-family)",
          "body-text-body-large": "var(--body-text-body-large-font-family)",
          "body-text-body-medium": "var(--body-text-body-medium-font-family)",
          "body-text-body-small": "var(--body-text-body-small-font-family)",
          "button-primary-button": "var(--button-primary-button-font-family)",
          "button-secounday-button": "var(--button-secounday-button-font-family)",
          "button-small-button": "var(--button-small-button-font-family)",
          "caption-caption-large": "var(--caption-caption-large-font-family)",
          "caption-caption-small": "var(--caption-caption-small-font-family)",
          "headings-h1": "var(--headings-h1-font-family)",
          "headings-h2": "var(--headings-h2-font-family)",
          "headings-h3": "var(--headings-h3-font-family)",
          "headings-h4": "var(--headings-h4-font-family)",
          "headings-h5": "var(--headings-h5-font-family)",
          "headings-h6": "var(--headings-h6-font-family)",
          "headings-hero": "var(--headings-hero-font-family)",
          "subtitle-subtitle-large": "var(--subtitle-subtitle-large-font-family)",
          "subtitle-subtitle-medium":
            "var(--subtitle-subtitle-medium-font-family)",
          "subtitle-subtitle-small": "var(--subtitle-subtitle-small-font-family)",
        },
      },
    },
    plugins: [],
  };
  