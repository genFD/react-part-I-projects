import { useState } from 'react'
import { nanoid } from 'nanoid'

export function Form(props) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)
  const { onAddItems } = props

  function handleSubmit(e) {
    e.preventDefault()
    if (!description) return
    const newItem = { description, quantity, packed: false, id: nanoid() }
    onAddItems(newItem)
    setDescription('')
  }
  function handleChange(event) {
    const value = event.target.value
    setDescription(value)
  }
  function handleSelect(e) {
    const value = Number(e.target.value)
    setQuantity(value)
  }
  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3> What do you need for your trip?</h3>
      <select value={quantity} onChange={handleSelect}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={handleChange}
        value={description}
        type="text"
        name=""
        id=""
        placeholder=""
      />
      <button>Add</button>
    </form>
  )
}
