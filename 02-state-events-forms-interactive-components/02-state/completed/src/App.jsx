import { useState } from 'react'
initialItems
import { Form } from './Form'
import { Logo } from './Logo'
import { PackingList } from './PackingList'
import { Stats } from './Stats'
import { initialItems } from './data'

function App() {
  const [items, setItems] = useState([])
  function handleAddItem(item) {
    setItems((curr) => [...curr, item])
  }
  function handleRemoveItem(id) {
    setItems((curr) => curr.filter((item) => item.id !== id))
  }
  function handleToggleItem(id) {
    setItems((curr) =>
      curr.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }
  function handleClearItems() {
    const confirmed = window.confirm('Are you sure you want to')
    if (confirmed) setItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        onRemoveItem={handleRemoveItem}
        items={items}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  )
}

export default App
