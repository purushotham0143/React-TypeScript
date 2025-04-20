// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  //Her strict mode is Debuggin mode it will render for 1 componentdidMount 2.componenetdidUodate then  your code will be excuted
  // <StrictMode>
    <BrowserRouter>
    <App />
     </BrowserRouter>  
  // </StrictMode>,
)


