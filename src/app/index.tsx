import React from "react"
import { Routes, Route } from "react-router-dom"
import { Main } from "../pages/main/main"
import { IritRtf } from "../pages/universities/irit-rtf"
import "./app.css"

/**
 * Основная компонента приложения
 *
 * */
export const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/irit-rtf" element={<IritRtf />} />
      </Routes>
    </div>
  )
}
