import { List, ListItem, Button, TextField, Switch, FormControlLabel } from '@mui/material'
import { Link } from 'react-router-dom'

export const ChatList = ({ chatList, deleteChat, addChat, newChatName }) => {

  let showChangeChat = false

  return (
    <List>
      {
        Object.keys(chatList).map((id, chat) => (
          <ListItem key={chatList[id].id}>
            <Link to={`/chats/${id}`}>
              {chatList[id].name}
            </Link>
            <Button style={{ display: showChangeChat ? "block" : "none" }} onClick={() => deleteChat(id)}>Удалить</Button>
          </ListItem>
        ))
      }
      <div style={{ display: showChangeChat ? "block" : "none" }}>
      <TextField     
          value={newChatName}
          type='text'
          label='Новый чат'
          placeholder='Введите название чата:'
        />
        <Button onClick={() => addChat(newChatName)}>Добавить</Button>
      </div>
      <FormControlLabel control=
        {
          <Switch onChange={() => {showChangeChat = !showChangeChat}} />
        } label="Изменить чаты" />
    </List>
  )
}

export default ChatList
