import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Counter from './context/Counter.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter>
      <App />
    </Counter>
  </React.StrictMode>,
)
