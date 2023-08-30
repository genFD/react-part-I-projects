import { useState } from 'react'

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
]

function App() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious() {
    if (step > 1) setStep((current) => current - 1)
  }
  function handleNext() {
    if (step < 3) setStep((current) => current + 1)
  }
  function toggleView() {
    setIsOpen((current) => !current)
  }
  return (
    <>
      <button onClick={toggleView} className="close">
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ background: '#7950f2', color: '#fff' }}>
              previous
            </button>
            <button
              onClick={handleNext}
              style={{ background: '#7950f2', color: '#fff' }}>
              next
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default App
