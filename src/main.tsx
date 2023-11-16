import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@/assets/fonts/SpaceMono-Bold.ttf';
import '@/assets/fonts/SpaceMono-BoldItalic.ttf';
import '@/assets/fonts/SpaceMono-Regular.ttf';
import '@/assets/fonts/SpaceMono-Italic.ttf';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
