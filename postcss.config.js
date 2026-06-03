import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  from: resolve(__dirname, 'src/assets/index.css'),
  plugins: {
    '@tailwindcss/postcss': {},
  },
};
