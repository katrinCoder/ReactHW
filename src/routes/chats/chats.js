import { ChatList } from '../../components'
import { Grid } from '@mui/material'

export const Chats = ({children, chatList, deleteChat, addChat }) => {
    
    return (
    <div>
        <h1>
            Чаты
        </h1>
        <Grid 
            container spacing={3}
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Grid item xs={2}>
                <ChatList chatList={chatList} deleteChat={deleteChat} addChat={addChat}/>
            </Grid>
            <Grid item xs={6}>
                {children}
            </Grid>
        </Grid>
    </div>
    )
}

export default Chats