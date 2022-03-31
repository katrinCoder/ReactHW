import { ChatMessage } from '../../components'
import { NoChat } from '../'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'

export const Chat = ({chatList}) => {
    const { chatId } = useParams()
    
    if (!chatList[chatId]) {
        return <NoChat/>
    }

    return (
        <Box 
            sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <h3>
                Чат: {chatList[chatId].name}
            </h3>
            <ChatMessage/>
        </Box>
    )
}

export default Chat