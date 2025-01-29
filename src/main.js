import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Initialize React application
const root = createRoot(document.getElementById('root'));

// Render app with StrictMode for additional development checks
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);