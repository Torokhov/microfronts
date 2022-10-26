import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { config } from './config';

config.init().then((config) => {
  const root = createRoot(document.getElementById('root'));
  root.render(<App config={config} />);
});
