module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom CSS variables for background
        foreground: "var(--foreground)", // Custom CSS variables for foreground
      },
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      // Custom plugin to handle `::selection` and `::-moz-selection`
      const selectionUtilities = {
        '::selection': {
          backgroundColor: theme('textSelection.DEFAULT.selection.backgroundColor', '#000000'),
          color: theme('textSelection.DEFAULT.selection.color', '#ffffff'),
        },
        '::-moz-selection': {
          backgroundColor: theme('textSelection.DEFAULT.selection.backgroundColor', '#000000'),
          color: theme('textSelection.DEFAULT.selection.color', '#ffffff'),
        },
      };
      addUtilities(selectionUtilities);
    },
  ],
};