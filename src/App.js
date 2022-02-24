import { useState } from 'react'

function App() {

  const [messagelist, setMessageList] = useState([])
  const [input, setInput] = useState('')
  
  const addMessage = (author, text) => {
    const newMessageList = [...messagelist]
    const newMessage = {
      author,
      text
    }
    newMessageList.push(newMessage)
    setMessageList(newMessageList)
  }

  const eventChangeMessage = (event) => {
    setInput(event.target.value)
  }

  const eventButtonSubmit = (event) => {
    event.preventDefault()
    addMessage('user', input)
    setInput('')
  }

  return (
    <div className="App">
      <form onSubmit={eventButtonSubmit}>
        <input
          onChange={eventChangeMessage}
          value={input}
          type='text'
          placeholder='Введите сообщение:'>
        </input>
        <button>Отправить</button>
      </form>
      <ul>
        {
          messagelist.map((message) => (
            <li>
              {message.author}: {message.text}
            </li>
          ))
        }  
      </ul>
    </div>
  );
}

export default App;
