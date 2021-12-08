import './css/style.scss'
import Header from "./components/Header";
import Projects from "./components/Projects";

import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#FFF',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Header />
                <Projects />
            </ThemeProvider>

        </div>
    );
}

export default App;
