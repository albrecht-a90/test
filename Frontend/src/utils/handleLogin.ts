import {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

export const useHandleLogin = (username: string, password: string) => {
    const navigate = useNavigate();
    const {t} = useTranslation();

    const handleLogin = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            if (!username || !password) {
                return t('error.fillFields');
            }
            if (username === 'testuser' && password === 'password123') {
                navigate('/home');
                return '';
            }
            return t('error.invalidCredentials');
        },
        [username, password, navigate, t]
    );

    return handleLogin;
};