import { createTheme } from '@mui/material/styles';

const light = createTheme({
    palette: {
        primary: {
            light: '#4f5964',
            main: '#283663',
            dark: '#24292e'
            // dark: '#283663',
            // main: '#24292e'
        },
        secondary: {
            main: '#ffdd00'
        },
        success: {
            main: '#4caf50'
        },
        error: {
            main: '#ca2c0c'
        },
        background: {
            default: '#f8f6f5'
        },
        text: {
            primary: 'rgb(14, 28, 50, 0.87)',
            secondary: 'rgb(14, 28, 50, 0.6)',
            disabled: 'rgb(14, 28, 50, 0.38)'
        }
    }
})

export default light