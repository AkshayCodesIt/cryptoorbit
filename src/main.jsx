import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path='/' element={<App/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
