/**
 * @type {import('lint-staged').Configuration}
 */
const config = {
  '*.{js,jsx,ts,tsx,mjs,cjs}': ['eslint --fix', 'prettier --write'],
  '*.{html,css,scss,sass,less,json,md,mdx,yml,yaml}': ['prettier --write'],
};

export default config;
