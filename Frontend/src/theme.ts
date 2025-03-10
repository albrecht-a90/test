import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: 'Roboto, Arial, sans-serif',
                },
            },
        },
    },
});

export default theme;