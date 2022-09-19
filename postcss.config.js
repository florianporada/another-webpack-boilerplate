const purgecss = require('purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = (ctx) => ({
  plugins: [
    'postcss-import',
    'postcss-preset-env',
    tailwindcss,
    autoprefixer,
    ...(ctx.options.env === 'production'
      ? [
          cssnano({
            preset: 'default',
          }),
          purgecss({
            content: ['./**/*.html'],
            keyframes: true,
            defaultExtractor: (content) => content.match(/[A-z0-9-:/]+/g),
          }),
        ]
      : []),
  ],
});
