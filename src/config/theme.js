import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CONSTANTS } from './constants';

const theme = createTheme({
    palette: {
        primary: {
            main: CONSTANTS.PRIMARY_COLOR
        },
        secondary: {
            main: CONSTANTS.SECONDARY_COLOR
        },
        contrastText: CONSTANTS.CONTRAST_TEXT
    },
});

export default function Theme({ children }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}