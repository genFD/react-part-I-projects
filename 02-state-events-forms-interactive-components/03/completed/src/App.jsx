import { useState } from 'react'
import { initialFriends } from './data'

function App() {
  const [showAddFriends, setShowAddFriends] = useState(false)
  function toggleShowAddFriends() {
    setShowAddFriends((currentState) => !currentState)
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriends && <FormAddFriend />}
        <Button toggleShowAddFriends={toggleShowAddFriends}>
          {showAddFriends ? 'Close' : 'Add friend'}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  )
}

function FriendsList() {
  const friends = initialFriends

  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  )
}

function Friend(props) {
  const { friend } = props
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  )
}

function FormAddFriend() {
  return (
    <form className="form-add-friend" action="">
      <label>🤿Friend name</label>
      <input type="text" />

      <label>🥅image</label>
      <input type="text" />
      <Button>Submit</Button>
    </form>
  )
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split bill with X</h2>
      <label>💰Bill</label>
      <input type="text" />

      <label>💰Your expense</label>
      <input type="text" />

      <label>💰X's expense</label>
      <input type="text" disabled />

      <label>❓Who is paying?</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  )
}

function Button(props) {
  const { children, toggleShowAddFriends } = props
  return (
    <button onClick={toggleShowAddFriends} className="button">
      {children}
    </button>
  )
}
export default App
