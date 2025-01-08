import { Button, Stack } from '@mui/material';
import React from 'react'

const StackComponent = () => {
    return ( <Stack spacing={2} direction={'row'}>
        <Button variant='contained'>Login</Button>
        <Button variant='contained'>Submit</Button>
        <Button variant='contained'>Submit</Button>
        <Button variant='contained'>Primary</Button>
        <Button variant='contained'>Warning</Button>
        <Button variant='contained'>Danger</Button>
    </Stack> );
}
 
export default StackComponent;