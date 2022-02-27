import { useState, useEffect } from 'react'

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
    if (input === '') return
    addMessage('user', input)
    setInput('')
  }

  useEffect(() => {
    if (messagelist.length === 0) return
    
    const lastMessage = messagelist[messagelist.length - 1]
    const timerBot = lastMessage.author !== 'bot' ? setTimeout(() => {addMessage('bot','Привет!')}, 1500) : ''

    return () => {
      clearTimeout(timerBot)
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messagelist])

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
          messagelist.map((message, index) => (
            <li key={index}>
              {message.author}: {message.text}
            </li>
          ))
        }  
      </ul>
    </div>
  );
}

export default App;
