import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import * as React from 'react';


export default function Test() {
  return (
    <div>
      <Box sx={{ width: '50%', p: 5 }}>
        <br />
        <Stack spacing={2}>
          <Button variant="contained" color='primary'>Primary</Button>
          <Button variant="contained" color='secondary'>Secondary</Button>
          <Button variant="contained" color='error'>Error</Button>
          <Button variant="contained" color='warning'>Warning</Button>
          <Button variant="contained" color='info'>Info</Button>
          <Button variant="contained" color='success'>Success</Button>
        </Stack>
      </Box>
    </div>
  )
}
