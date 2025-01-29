import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './main.css'
import './i18n.ts';

import { RoutesConfig } from './routes/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesConfig />
  </StrictMode>,
)
