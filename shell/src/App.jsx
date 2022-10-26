import React from 'react';
import { LazyService } from './LazyService/LazyService';

export const App = ({ config }) => {
  return (
    <div>
      <div>SHELL</div>
      <LazyService microservice={config.microservices.remote} />
    </div>
  );
};
