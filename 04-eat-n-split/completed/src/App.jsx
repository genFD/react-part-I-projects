import { useState } from 'react'
import { nanoid } from 'nanoid'
import { initialFriends } from './data'

function App() {
  const [showAddFriends, setShowAddFriends] = useState(false)
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null)

  function toggleShowAddFriends() {
    setShowAddFriends((currentState) => !currentState)
  }
  function handleAddFriend(newFriend) {
    setFriends((currentList) => [...currentList, newFriend])
  }
  function handleSelection(friend) {
    setSelectedFriend((currentFriend) =>
      currentFriend?.id === friend.id ? null : friend
    )
    setShowAddFriends(false)
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    )

    setSelectedFriend(null)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriends && <FormAddFriend handleAddFriend={handleAddFriend} />}
        <Button toggleShowAddFriends={toggleShowAddFriends}>
          {showAddFriends ? 'Close' : 'Add friend'}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  )
}

function FriendsList(props) {
  const { friends, onSelection, selectedFriend } = props

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          handleSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  )
}

function Friend(props) {
  const { friend, handleSelection, selectedFriend } = props
  const isFriendSelected = friend.id === selectedFriend?.id
  return (
    <li className={isFriendSelected ? 'selected' : ''}>
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
      {/* <Button onClick={() => handleSelection(friend)}>Select</Button> */}
      <button className="button" onClick={() => handleSelection(friend)}>
        {isFriendSelected ? 'close' : 'select'}
      </button>
    </li>
  )
}

function FormAddFriend(props) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('https://i.pravatar.cc/48?u=')
  const { handleAddFriend } = props

  function handleName(e) {
    const value = e.target.value
    setName(value)
  }

  function handleImage(e) {
    const value = e.target.value
    setImage(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!name || !image) return
    const id = nanoid()
    const newFriend = { id, name, image: `${image}${id}`, balance: 0 }
    handleAddFriend(newFriend)
    setName('')
    setImage('https://i.pravatar.cc/48?u=')
  }

  return (
    <form onSubmit={handleSubmit} className="form-add-friend">
      <label>🤿Friend name</label>
      <input value={name} onChange={handleName} type="text" />
      <label>🥅image</label>
      <input value={image} onChange={handleImage} type="text" />
      <Button>Submit</Button>
    </form>
  )
}

function FormSplitBill(props) {
  const [bill, setBill] = useState('')
  const [paidByUser, setPaidByUser] = useState('')
  const [whoIsPaying, setWhoIsPaying] = useState('')

  const { selectedFriend, handleSplitBill } = props

  const paidByFriend = bill ? bill - paidByUser : ''

  function handleBillChange(e) {
    setBill(+e.target.value)
  }
  function handleExpenseChange(e) {
    setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
  }
  function handleWhoIsPayingChange(e) {
    setWhoIsPaying(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (!bill || !paidByUser) return
    const value = whoIsPaying === 'user' ? paidByFriend : -paidByUser
    handleSplitBill(value)
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split bill with {selectedFriend.name}</h2>
      <label>💰Bill</label>
      <input type="text" value={bill} onChange={handleBillChange} />

      <label>💰Your expense</label>
      <input type="text" value={paidByUser} onChange={handleExpenseChange} />

      <label>💰{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>❓Who is paying?</label>
      <select
        name=""
        id=""
        value={whoIsPaying}
        onChange={handleWhoIsPayingChange}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
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
