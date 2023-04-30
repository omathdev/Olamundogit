import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cards from './Cards.jsx'
import MyButton from './MyButton.jsx'
import Alteração from './alteração.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <div className='prime'> 
    <Cards />  
    </div>
    <div className='Final'> 
    <MyButton />
    </div>
    <Alteração />
  </React.StrictMode>,
)


