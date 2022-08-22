import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';

import styles from './styles/tailwind.css';
import icons from './assets/fontawesome/css/all.css';
import './styles/orangy.css';

export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: icons },
  ];
}

export const meta = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
});

export default function App(nav) {
  return (
    <html lang="en">
      <head>
        <Meta />

        <Links />
      </head>

      <body data-theme="orangy">
        <Outlet />

        <ScrollRestoration />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}
