import React from 'react'
import TextField from "@mui/material/TextField"
import { Stack, Box} from "@mui/material"

function SignUp() {
  return (
    <Box
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
  >
    <Stack spacing={2}>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
    </Stack>
  </Box>
  )
}

export default SignUp