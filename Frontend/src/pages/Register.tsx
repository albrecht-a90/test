import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Link,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { registerUser } from '../api/auth';
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { t } = useTranslation();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!username || !password || !confirmPassword) {
            setError(t('error.fillFields'));
            return;
        }

        if (password !== confirmPassword) {
            setError(t('error.passwordMismatch'));
            return;
        }

        try {
            const data = await registerUser(username, password);
            setPassword('');
            setConfirmPassword('');
            console.log('Успешная регистрация:', data);
            navigate('/login');
        } catch (err: unknown) {
            setError(t('error.registrationFailed'));
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
                    {t('register.title')}
                </Typography>
                {error && (
                    <Typography color="error" align="center" sx={{ mb: 2 }}>
                        {error}
                    </Typography>
                )}
                <TextField
                    label={t('register.username')}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={!!error}
                />
                <TextField
                    label={t('register.password')}
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!error}
                />
                <TextField
                    label={t('register.confirmPassword')}
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={!!error}
                />
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={onSubmit}
                    sx={{ mt: 2 }}
                >
                    {t('register.submit')}
                </Button>
                <Link href="/login" color="primary" align="center" sx={{ mt: 2 }}>
                    {t('register.haveAccount')}
                </Link>
            </Box>
        </Box>
    );
};

export default Register;