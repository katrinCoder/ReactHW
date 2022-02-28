import { useState, useEffect, useRef } from 'react'
import { Container, Paper, Button, TextField, Box, List, ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from '@mui/material'
import CommentIcon from '@mui/icons-material/Comment'
import { nanoid } from 'nanoid'

function App() {
  const textInput = useRef(null);
  
  const chatList = [
    {
      name: 'FoodChat',
      id: nanoid()
    },
    {
      name: 'SportChat',
      id: nanoid()
    },
    {
      name: 'TravelChat',
      id: nanoid()
    },
    {
      name: 'EducationChat',
      id: nanoid()
    },
    {
      name: 'MusicChat',
      id: nanoid()
    }
  ]
  
  const [messagelist, setMessageList] = useState([])
  const [input, setInput] = useState('')
  
  const addMessage = (author, text) => {
    const newMessageList = [...messagelist]
    const newMessage = {
      author,
      text,
    }
    newMessage.id = nanoid()
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

  useEffect(() => {
    textInput.current.focus()
  })

  return (
    <Container maxWidth="md" className="App"
      sx={{ 
        display: 'flex',
        alignItems: 'center',
        height: '100vh'
      }}  
    >
      <List>
        {
          chatList.map((chat) => (
            <ListItem key={chat.id}>
              {chat.name}
            </ListItem>
          ))
        }  
      </List>
      <Paper 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 2,
          height: '80vh',
          width: '100%'
        }} 
        elevation={5}
      >
        <Box component={'form'} onSubmit={eventButtonSubmit}>
          <TextField
            sx={{ width: '65%' }}
            onChange={eventChangeMessage}
            value={input}
            inputRef={textInput}
            type='text'
            id='outlined-textarea'
            label='Сообщение'
            placeholder='Введите сообщение:'
            multiline
          />
          <Button sx={{ verticalAlign: 'bottom', marginLeft: '10px' }} type='submit' variant="contained">Отправить</Button>
        </Box>
        <List sx={{
            height: '90%',
            itemSize: '10',
            overflow: 'auto'
          }}
        >
          {
            messagelist.map((message) => (
              <ListItem key={message.id}
                disableGutters
                secondaryAction={
                  <IconButton>
                    <CommentIcon />
                  </IconButton>
                }>

                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: `#eeb${message.author.charCodeAt(0)}` }}>{message.author}</Avatar>
                </ListItemAvatar>
                <ListItemText id={message.id} primary={message.text} />
              </ListItem>
            ))
          }  
        </List>
      </Paper>
    </Container>
  );
}

export default App;
