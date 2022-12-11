const path = require('path');
module.exports = {
  webpack: {
    configure: {
      ignoreWarnings: [{ message: /Failed to parse source map/ }],
    },
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
