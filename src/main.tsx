import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './main.css'
import './i18n.ts';

import App from './pages/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
