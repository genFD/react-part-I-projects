import React from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza name="Pizza spinaci" ingredients="Tomato, sauce" />
    </main>
  )
}
function Pizza(props) {
  const { name, ingredients } = props
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="pizza" />
      <h3>{name}</h3>
      <p>{ingredients}</p>
    </div>
  )
}
function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're currently open!
    </footer>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
