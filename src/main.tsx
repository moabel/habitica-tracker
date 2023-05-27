import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="app-wrapper">
      <App />
    </div>
    <div style={{textAlign: 'center'}}>
      <a style={{textAlign: 'center', color:"white"}} target="_blank"  href="https://moabel.github.io/habitica-tracker/">https://moabel.github.io/habitica-tracker/</a>
    </div>
  </React.StrictMode>,
)
