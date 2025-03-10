import api from './api';

export const loginUser = async (username: string, password: string) => {
    try {
        const response = await api.post('/auth/login', { username, password });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error);
            throw error.message || 'error.failLogin';
        } else {
            console.log(error);
            throw 'error.failLogin';
        }
    }
};

export const registerUser = async (username: string, password: string) => {
    try {
        const response = await api.post('/auth/register', { username, password });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error);
            throw error.message || 'error.failLogin';
        } else {
            console.log(error);
            throw 'error.failLogin';
        }
    }
};