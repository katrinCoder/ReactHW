import { nanoid } from 'nanoid'
import { List, ListItem } from '@mui/material'


export const ChatList = () => {

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

    return (
        <List>
        {
          chatList.map((chat) => (
            <ListItem key={chat.id}>
              {chat.name}
            </ListItem>
          ))
        }  
        </List>
    )
}

export default ChatList