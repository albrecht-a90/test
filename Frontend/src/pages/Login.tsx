import React, {useState} from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Link,
} from '@mui/material';
import {useTranslation} from 'react-i18next';
import {loginUser} from '../api/auth'
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {t} = useTranslation();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (!username || !password) {
            setError(t('error.fillFields'));
            return;
        }
        try {
            const data = await loginUser(username, password);
            setPassword('');
            localStorage.setItem('authToken', data.token);
            navigate('/');
        } catch (err: unknown) {
            setError(t('error.invalidCredentials'));
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f5f5f5',
        }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: 400,
                    width: '100%',
                    padding: 3,
                    boxShadow: 2,
                    backgroundColor: '#ffffff',
                }}
            >
                <Typography variant="h5" align="center" gutterBottom>
                    {t('login.title')}
                </Typography>
                {error && (
                    <Typography color="error" align="center" sx={{mb: 2}}>
                        {error}
                    </Typography>
                )}
                <TextField
                    label={t('login.username')}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={!!error}
                />
                <TextField
                    label={t('login.password')}
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!error}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={onSubmit}
                    sx={{mt: 2}}
                >
                    {t('login.submit')}
                </Button>
                <Link href="/register" color="primary" align="center" sx={{mt: 2}}>
                    {t('login.noAccount')}
                </Link>
            </Box>
        </Box>
    );
};

export default Login;