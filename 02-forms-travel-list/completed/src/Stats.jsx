export function Stats(props) {
  const { items } = props

  if (items.length <= 0)
    return (
      <p className="stats">
        <em>Start adding items to your list 🚀</em>
      </p>
    )
  const numItems = items.length
  const packed = items.filter((item) => item.packed)
  const percentage = Math.round((packed.length / numItems) * 100)

  return (
    <footer className="stats">
      {percentage < 100 ? (
        <em>
          💼 You have {numItems} items and you already packed {percentage} %
        </em>
      ) : (
        <span> You all set! ✈️ </span>
      )}
    </footer>
  )
}
