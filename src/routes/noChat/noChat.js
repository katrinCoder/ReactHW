import { Box, Alert, AlertTitle } from '@mui/material'

export const NoChat = () => {
    
    return (
        <Box>
            <Alert severity="error">
                <AlertTitle>
                    Ошибка: 404
                </AlertTitle>
                <br/>
                Чата не существует
                <br/>
                Выберете чат из списка
            </Alert>
        </Box>
    )
}

export default NoChat