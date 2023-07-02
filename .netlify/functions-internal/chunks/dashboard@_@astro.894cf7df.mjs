export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';
import './astro.e45a0d31.mjs';
import 'cookie';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import 'path-to-regexp';
import 'mime';
import 'html-escaper';
import 'string-width';
import 'react';
import 'react-dom/server';

const page = () => import('./pages/dashboard.astro.f55b6498.mjs').then(n => n.d);

export { page };
