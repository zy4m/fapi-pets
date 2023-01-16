import React from 'react';
import ReactDOM from 'react-dom/client';
import PetGrid from './components/PetGrid/PetGrid';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PetGrid />
  </React.StrictMode>
);
