import { Box, Button, Link, TextField, Typography, Stack } from '@mui/material';

export default function LoginForm({ email, setEmail, password, setPassword, error, handleLogin }) {
    return (
        <Box width={'100vw'} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>

            <Box sx={{ width: '40%', height: '70%', bgcolor: '#696969', borderRadius: 2, boxShadow: 3, textAlign: 'center', mt: 8, position: 'relative'}}>

                <Box sx={{p: 4}}>
                    <Typography variant='h5' marginBottom={'20px'} color={'black'}>Log in to FlashcardsAI</Typography>

                    <form onSubmit={handleLogin}>
                        
                        <Stack spacing={3}>
                            <TextField color='warning' label="Email address" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <TextField color='warning' label="Password" type="password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} required/>

                            {error && <Typography color="error">{error}</Typography>}

                            <Button type="submit" variant="contained" fullWidth sx={{ bgcolor: '#444444', color: 'white', '&:hover': {bgcolor: '#555'}}}>Continue</Button>
                            
                        </Stack>
                        
                    </form>
                </Box>

                <Box width={'100%'} height={'12%'} sx={{bgcolor: '#e6e6e6', borderRadius: 2, position: 'absolute', bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography>Don&#39;t have an account?</Typography>
                    <Link href='/signup' underline="false" sx={{textDecoration: 'none', color: 'black', '&:hover': {color: '#555', textDecoration: 'underline'}}}>Sign Up</Link>
                </Box>

            </Box>
        
        </Box>
    );
}
