import { useDynamicScript } from './useDynamicScript';
import { loadComponent } from './loadComponents';
import React, { lazy, Suspense } from 'react';

export const LazyService = ({ microservice, loadingMessage, errorMessage }) => {
  const { ready, failed } = useDynamicScript(microservice.url);

  const errorNode = errorMessage || <span>Failed to load dynamic script: {microservice.url}</span>;

  if (failed) {
    return <>{errorNode}</>;
  }

  const loadingNode = loadingMessage || <span>Loading dynamic script: {microservice.url}</span>;

  if (!ready) {
    return <>{loadingNode}</>;
  }

  const Component = lazy(loadComponent(microservice.scope, microservice.module));

  return (
    <Suspense fallback={loadingNode}>
      <Component {...(microservice.props || {})} />
    </Suspense>
  );
};
