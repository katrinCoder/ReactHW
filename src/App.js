import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainMenu } from './components';
import { Home, Profile, Chats, Chat, NoChat } from './routes'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

const initChatList = {
  id1: {
      name: 'FoodChat',
      id: nanoid()
    },
  id2: {
      name: 'SportChat',
      id: nanoid()
    },
  id3: {
      name: 'TravelChat',
      id: nanoid()
    },
  id4: {
      name: 'EducationChat',
      id: nanoid()
    },
  id5: {
      name: 'MusicChat',
      id: nanoid()
    }
}

function App() {

  const [chatList, setChats] = useState(initChatList);

  const deleteChat = (id) => {
    delete chatList[id]
    console.log(chatList)
    setChats(chatList)
  }

  const addChat = (newChatName) => {
    const newChatList = {...chatList}
    console.log(newChatList)
    const newChat = { 
      newChatName: {
        name: 'newChatName',
        id: nanoid()
      }
    }
    console.log(newChat)
    Object.keys(newChatList).push(newChat)
    setChats(newChatList)
    console.log(chatList)
  }

  return (
    <Provider store={store}>
      <Router>
        <MainMenu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/chats">
            <Chats chatList={chatList} deleteChat={deleteChat} addChat={addChat}>
              <Switch>
                <Route path="/chats/:chatId">
                  <Chat chatList={chatList}/>
                </Route>
                <Route path="/chats/:chatId" component={NoChat}/>
              </Switch>
            </Chats>  
          </Route>
          <Route path='*'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
