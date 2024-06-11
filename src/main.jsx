import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/styles.scss'
import App from './App.jsx'
import Menu from './Menu.jsx'
import './index.css'

const components = [
  { name: 'MyForm', src: './components/MyForm.html' },
  { name: 'Carosel', src: '#' },
  { name: 'TodoList', src: '#'}
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Menu names={components} />
  </React.StrictMode>,
)
